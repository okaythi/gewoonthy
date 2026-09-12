import { state, setLyrics, setTargetIndices } from './state';
import { 
  parseSongInfoFromFilename, 
  canonicalSongId, 
  canonicalVideoFilename, 
  parseRawLyrics 
} from '../naming';
import { buildPayload } from './persistence';
import type { SaveLyricsPayload, SongCatalogItem } from '../../../types/karaoke';
import type { getStudioElements } from './dom';

type StudioElements = ReturnType<typeof getStudioElements>;

/**
 * Initializes all modal drawers:
 * 1. Video Upload to R2
 * 2. Raw Lyrics / LRC Ingestion
 * 3. Keyboard Shortcuts
 * 4. JSON Export (Zero Data Loss)
 */
export function initModals(
  els: StudioElements,
  showToast: (msg: string, isError?: boolean) => void,
  onLyricsIngested: () => void,
  onNewTrackUploaded: (newSong: SongCatalogItem) => void
) {
  const {
    uploadModal, btnOpenUpload, btnCloseUpload, btnCancelUpload, btnStartUpload,
    uploadFileInput, uploadArtistInput, uploadTitleInput, uploadCanonicalKey,
    uploadProgressContainer, uploadProgressFill, uploadPctText,
    ingestModal, btnOpenIngest, btnCloseIngest, btnCancelIngest, btnApplyIngest, rawLyricsInput,
    shortcutsModal, btnShortcuts, btnCloseShortcuts, btnDismissShortcuts,
    exportModal, btnExportJson, btnCloseExport, btnCopyExport, btnDownloadExport, exportJsonDisplay
  } = els;

  // Shortcuts Modal
  btnShortcuts.addEventListener('click', () => shortcutsModal.classList.add('open'));
  btnCloseShortcuts.addEventListener('click', () => shortcutsModal.classList.remove('open'));
  btnDismissShortcuts.addEventListener('click', () => shortcutsModal.classList.remove('open'));

  // Ingestion Modal
  btnOpenIngest.addEventListener('click', () => ingestModal.classList.add('open'));
  btnCloseIngest.addEventListener('click', () => ingestModal.classList.remove('open'));
  btnCancelIngest.addEventListener('click', () => ingestModal.classList.remove('open'));

  btnApplyIngest.addEventListener('click', () => {
    const text = rawLyricsInput.value.trim();
    if (!text) return;
    const parsed = parseRawLyrics(text);
    if (parsed.length > 0) {
      setLyrics(parsed);
      setTargetIndices(0, 0);
      onLyricsIngested();
      ingestModal.classList.remove('open');
      showToast(`Ingested ${parsed.length} verses ready for synchronization!`);
    }
  });

  // Export Modal
  const openExportModal = (payload?: SaveLyricsPayload) => {
    const data = payload || buildPayload(els) || {
      id: state.activeSong?.id || 'track',
      videoFile: state.activeSong?.videoFile || 'track.mp4',
      title: state.activeSong?.title || 'Title',
      artist: state.activeSong?.artist || 'Artist',
      globalOffset: state.globalOffset,
      hasTranslation: false,
      isDialect: false,
      lyricsData: state.localLyrics
    };

    exportJsonDisplay.value = JSON.stringify(data, null, 2);
    exportModal.classList.add('open');
  };

  btnExportJson.addEventListener('click', () => openExportModal());
  btnCloseExport.addEventListener('click', () => exportModal.classList.remove('open'));

  btnCopyExport.addEventListener('click', () => {
    navigator.clipboard.writeText(exportJsonDisplay.value);
    showToast('JSON copied to clipboard!');
  });

  btnDownloadExport.addEventListener('click', () => {
    const blob = new Blob([exportJsonDisplay.value], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${els.metaId.value || 'lyrics'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  // Video Upload Modal
  btnOpenUpload.addEventListener('click', () => uploadModal.classList.add('open'));
  btnCloseUpload.addEventListener('click', () => uploadModal.classList.remove('open'));
  btnCancelUpload.addEventListener('click', () => uploadModal.classList.remove('open'));

  uploadFileInput.addEventListener('change', () => {
    const file = uploadFileInput.files?.[0];
    if (!file) return;

    const info = parseSongInfoFromFilename(file.name);
    uploadArtistInput.value = info.artist;
    uploadTitleInput.value = info.title;
    uploadCanonicalKey.value = canonicalVideoFilename(info.artist, info.title, info.ext);
  });

  uploadArtistInput.addEventListener('input', () => {
    uploadCanonicalKey.value = canonicalVideoFilename(uploadArtistInput.value, uploadTitleInput.value);
  });
  uploadTitleInput.addEventListener('input', () => {
    uploadCanonicalKey.value = canonicalVideoFilename(uploadArtistInput.value, uploadTitleInput.value);
  });

  btnStartUpload.addEventListener('click', async () => {
    const file = uploadFileInput.files?.[0];
    if (!file) {
      alert('Please select a video file.');
      return;
    }

    const canonicalKey = uploadCanonicalKey.value.trim() || file.name;
    uploadProgressContainer.style.display = 'block';
    uploadProgressFill.style.width = '20%';
    btnStartUpload.disabled = true;

    try {
      const formData = new FormData();
      formData.append('video', file, canonicalKey);

      const res = await fetch('/api/admin/karaoke/upload', {
        method: 'POST',
        body: formData
      });

      uploadProgressFill.style.width = '100%';
      uploadPctText.textContent = '100%';

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Upload failed');
      }

      uploadModal.classList.remove('open');
      showToast(`Uploaded "${canonicalKey}" to R2!`);

      const artist = uploadArtistInput.value.trim() || 'Unknown';
      const title = uploadTitleInput.value.trim() || 'Untitled';
      const newSlug = canonicalSongId(artist, title);

      const newSong: SongCatalogItem = {
        id: newSlug,
        videoFile: canonicalKey,
        title,
        artist,
        globalOffset: 0,
        hasTranslation: false,
        isDialect: false,
        isOnR2: true,
        hasLyrics: false,
        videoUrl: `https://cdn.sudothy.me/${encodeURIComponent(canonicalKey)}`
      };

      onNewTrackUploaded(newSong);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      alert(`Upload failed: ${msg}`);
    } finally {
      btnStartUpload.disabled = false;
      uploadProgressContainer.style.display = 'none';
    }
  });

  return { openExportModal };
}
