import { state } from './state';
import { validateSongContract } from '../naming';
import type { SaveLyricsPayload } from '../../../types/karaoke';
import type { getStudioElements } from './dom';

type StudioElements = ReturnType<typeof getStudioElements>;

/**
 * Builds the canonical SaveLyricsPayload from current workstation inputs and state
 */
export function buildPayload(els: StudioElements): SaveLyricsPayload | null {
  if (!state.activeSong) return null;

  return {
    id: els.metaId.value.trim() || state.activeSong.id,
    videoFile: state.activeSong.videoFile,
    title: els.metaTitle.value.trim() || state.activeSong.title,
    artist: els.metaArtist.value.trim() || state.activeSong.artist,
    itunesArtist: els.metaItunesArtist.value.trim() || undefined,
    itunesTrack: els.metaItunesTrack.value.trim() || undefined,
    globalOffset: state.globalOffset,
    hasTranslation: els.metaHasTranslation.checked,
    isDialect: els.metaIsDialect.checked,
    lyricsData: state.localLyrics
  };
}

/**
 * Multi-tier Save Pipeline:
 * 1. Local Sync Daemon (localhost:4322) -> atomic file write in git
 * 2. Cloudflare Pages Function (/api/admin/karaoke/save) -> R2 live cache + GitHub commit
 * 3. Fallback to Export Modal with zero data loss
 */
export async function saveMaster(
  els: StudioElements,
  showToast: (msg: string, isError?: boolean) => void,
  openExportModal: (payload?: SaveLyricsPayload) => void,
  onSongSaved: () => void
): Promise<void> {
  const payload = buildPayload(els);
  if (!payload) return;

  const validation = validateSongContract(payload);
  if (!validation.valid) {
    alert(`Validation Error:\n${validation.errors.join('\n')}`);
    return;
  }

  els.btnSaveMaster.textContent = 'Saving...';

  // 1. Try Local Sync Daemon (localhost:4322)
  try {
    const localRes = await fetch('http://localhost:4322/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (localRes.ok) {
      els.btnSaveMaster.textContent = 'Saved!';
      setTimeout(() => { els.btnSaveMaster.textContent = 'Save (Ctrl+S)'; }, 1500);
      showToast(`Saved to local Git repository: src/data/lyrics/${payload.id}.json`);
      if (state.activeSong) state.activeSong.hasLyrics = true;
      onSongSaved();
      return;
    }
  } catch (_) {
    // Local daemon offline, fall through to Cloudflare Pages endpoint
  }

  // 2. Try Cloudflare Pages Function (/api/admin/karaoke/save)
  try {
    const cfRes = await fetch('/api/admin/karaoke/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (cfRes.ok) {
      const cfData = await cfRes.json();
      els.btnSaveMaster.textContent = 'Saved!';
      setTimeout(() => { els.btnSaveMaster.textContent = 'Save (Ctrl+S)'; }, 1500);

      let msg = 'Saved to Cloudflare R2 live overlay (0ms playback delay)';
      if (cfData.githubCommitted) {
        msg += ' & permanently committed to GitHub repository!';
      }
      showToast(msg);
      if (state.activeSong) state.activeSong.hasLyrics = true;
      onSongSaved();
      return;
    }
  } catch (_) {
    // Cloudflare endpoint offline
  }

  // 3. Fallback: Prompt JSON Export to prevent any loss of timing work
  els.btnSaveMaster.textContent = 'Save (Ctrl+S)';
  showToast('Local sync daemon & remote API offline. Exporting JSON...', true);
  openExportModal(payload);
}
