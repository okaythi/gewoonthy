import { loadCatalog, loadLyrics } from '../catalog';
import { parseRawLyrics } from '../naming';
import { getStudioElements } from './dom';
import { 
  state, 
  setCatalog, 
  setFilter, 
  setActiveSong, 
  setLyrics, 
  setOffset, 
  setTargetIndices 
} from './state';
import { fetchAlbumArt } from './itunes';
import { initPlayer } from './player';
import { renderMatrix, updateTelemetry } from './renderer';
import { initSyncEngine } from './syncEngine';
import { saveMaster } from './persistence';
import { initModals } from './modals';
import type { SongCatalogItem } from '../../../types/karaoke';
import type { FilterMode } from './types';

export async function bootstrapStudio(): Promise<void> {
  const els = getStudioElements();

  // Toast feedback helper
  const showToast = (msg: string, isError = false) => {
    els.toastMessage.textContent = msg;
    els.toastDot.style.background = isError ? 'var(--accent-red)' : 'var(--accent-green)';
    els.toastHud.classList.add('show');
    setTimeout(() => els.toastHud.classList.remove('show'), 3000);
  };

  // Track Selector Dropdown Populator
  const refreshDropdown = () => {
    els.trackSelector.innerHTML = '';
    const filtered = state.catalog.filter(song => {
      if (state.currentFilter === 'needs_sync') return !song.hasLyrics;
      if (state.currentFilter === 'synced') return song.hasLyrics;
      return true;
    });

    filtered.forEach(song => {
      const opt = document.createElement('option');
      opt.value = song.id;
      const statusIcon = !song.isOnR2 
        ? '🔴 [NO MEDIA]' 
        : (!song.hasLyrics ? '🟡 [NEEDS SYNC]' : '🟢 [SYNCED]');
      opt.textContent = `${statusIcon} ${song.artist} - ${song.title}`;
      els.trackSelector.appendChild(opt);
    });

    if (filtered.length > 0) {
      if (!state.activeSong || !filtered.some(s => s.id === state.activeSong?.id)) {
        loadSelectedSong(filtered[0].id);
      } else {
        els.trackSelector.value = state.activeSong.id;
      }
    }
  };

  // Song Loader
  const loadSelectedSong = async (songId: string) => {
    const song = state.catalog.find(s => s.id === songId);
    if (!song) return;

    setActiveSong(song);
    els.trackSelector.value = song.id;

    // Left Panel Metadata
    els.metaId.value = song.id;
    els.metaTitle.value = song.title;
    els.metaArtist.value = song.artist;
    els.metaItunesTrack.value = song.itunesTrack || '';
    els.metaItunesArtist.value = song.itunesArtist || '';
    els.metaHasTranslation.checked = !!song.hasTranslation;
    els.metaIsDialect.checked = !!song.isDialect;

    setOffset(song.globalOffset || 0);
    els.offsetDisplay.textContent = `${state.globalOffset >= 0 ? '+' : ''}${state.globalOffset.toFixed(2)}s`;

    els.statsR2Status.textContent = song.isOnR2 ? '🟢 In Media Bucket' : '🔴 Missing on R2';
    els.statsR2Status.style.color = song.isOnR2 ? 'var(--accent-green)' : 'var(--accent-red)';

    fetchAlbumArt(
      song.itunesArtist || song.artist,
      song.itunesTrack || song.title,
      els.trackArtImg,
      els.artStatusBadge
    );

    // Video stream
    els.vid.src = `https://cdn.sudothy.me/${encodeURIComponent(song.videoFile)}`;
    els.vid.playbackRate = state.playbackRate;
    els.vid.currentTime = 0;

    // Load Lyrics
    const lyricsDoc = await loadLyrics(song.id);
    setLyrics(lyricsDoc?.lyricsData ? JSON.parse(JSON.stringify(lyricsDoc.lyricsData)) : []);
    setTargetIndices(0, 0);

    renderMatrix(els, playerController.renderBlocks);
    playerController.renderBlocks();
    updateTelemetry(els);
  };

  // Initialize Player
  const playerController = initPlayer(els);

  // Initialize Modals
  const modalController = initModals(
    els,
    showToast,
    () => {
      renderMatrix(els, playerController.renderBlocks);
      playerController.renderBlocks();
      updateTelemetry(els);
    },
    (newSong: SongCatalogItem) => {
      state.catalog.unshift(newSong);
      refreshDropdown();
      loadSelectedSong(newSong.id);
    }
  );

  // Initialize Keyboard Tap-to-Sync & Transports
  initSyncEngine(
    els,
    () => saveMaster(els, showToast, modalController.openExportModal, refreshDropdown),
    playerController.renderBlocks,
    playerController.togglePlay
  );

  // Track Selector Change
  els.trackSelector.addEventListener('change', (e) => {
    loadSelectedSong((e.target as HTMLSelectElement).value);
  });

  // Filter Tabs
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setFilter((btn.getAttribute('data-filter') || 'all') as FilterMode);
      refreshDropdown();
    });
  });

  // Wipe Timestamps
  els.btnWipe.addEventListener('click', () => {
    if (confirm('Wipe ALL timestamps for this track? Words will remain, but timing will reset to 0.')) {
      state.localLyrics.forEach(v => {
        v.verseStart = 0;
        v.verseEnd = 0;
        v.words.forEach(w => {
          w.start = 0;
          w.end = 0;
        });
      });
      setTargetIndices(0, 0);
      els.vid.currentTime = 0;
      renderMatrix(els, playerController.renderBlocks);
      playerController.renderBlocks();
      updateTelemetry(els);
      showToast('Timings wiped. Ready for fresh sync.');
    }
  });

  // Add Verse
  els.btnAddVerse.addEventListener('click', () => {
    const text = prompt('Enter verse line (or leave blank for empty template):');
    if (text !== null) {
      const newVerses = parseRawLyrics(text || 'VerseWord ');
      if (newVerses.length > 0) {
        state.localLyrics.push(...newVerses);
      } else {
        state.localLyrics.push({ verseStart: 0, verseEnd: 0, words: [{ word: 'Word ', start: 0, end: 0 }] });
      }
      renderMatrix(els, playerController.renderBlocks);
      playerController.renderBlocks();
      updateTelemetry(els);
    }
  });

  // Save Master Button
  els.btnSaveMaster.addEventListener('click', () => {
    saveMaster(els, showToast, modalController.openExportModal, refreshDropdown);
  });

  // Boot initial catalog
  try {
    const loaded = await loadCatalog();
    setCatalog(loaded);
    refreshDropdown();
  } catch (err) {
    console.error('Failed to load initial catalog:', err);
  }
}

// Auto-run on DOM ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', bootstrapStudio);
}
