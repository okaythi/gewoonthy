import { state, setOffset, setPlaybackRate } from './state';
import { renderMatrix, updateTelemetry } from './renderer';
import type { getStudioElements } from './dom';

type StudioElements = ReturnType<typeof getStudioElements>;

/**
 * Initializes the keyboard-first tap-to-sync engine and studio transport modifiers
 */
export function initSyncEngine(
  els: StudioElements,
  onSaveMaster: () => void,
  onRenderBlocks: () => void,
  togglePlay: () => void
) {
  const { matrixPane, vid, offsetDisplay } = els;

  // Spacebar Tap-to-Sync & Keyboard Modifiers
  matrixPane.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      e.preventDefault();
      if (state.currentV >= state.localLyrics.length) return;

      const time = parseFloat((vid.currentTime - state.globalOffset).toFixed(3));
      const verse = state.localLyrics[state.currentV];
      if (!verse || !verse.words || state.currentW >= verse.words.length) return;

      // 1. Stamp start of current word
      verse.words[state.currentW].start = Math.max(0, time);

      // 2. If first word of verse, set verseStart
      if (state.currentW === 0) {
        verse.verseStart = Math.max(0, time);
      }

      // 3. Close end timestamp of previous word
      if (state.currentW > 0) {
        verse.words[state.currentW - 1].end = Math.max(verse.words[state.currentW - 1].start, time);
      } else if (state.currentV > 0) {
        const prevV = state.localLyrics[state.currentV - 1];
        if (prevV.words.length > 0) {
          const lastW = prevV.words[prevV.words.length - 1];
          lastW.end = Math.max(lastW.start, time);
          prevV.verseEnd = Math.max(prevV.verseStart, time);
        }
      }

      // 4. Advance target indices
      state.currentW++;
      if (state.currentW >= verse.words.length) {
        verse.verseEnd = parseFloat((time + 2.0).toFixed(3));
        state.currentW = 0;
        state.currentV++;
      }

      renderMatrix(els, onRenderBlocks);
      onRenderBlocks();
      updateTelemetry(els);
    } else if (e.code === 'Backspace') {
      e.preventDefault();
      if (e.shiftKey) {
        // Delete current verse
        if (state.localLyrics[state.currentV]) {
          state.localLyrics.splice(state.currentV, 1);
          if (state.currentV >= state.localLyrics.length) {
            state.currentV = Math.max(0, state.localLyrics.length - 1);
          }
          state.currentW = 0;
          renderMatrix(els, onRenderBlocks);
          onRenderBlocks();
          updateTelemetry(els);
        }
      } else {
        // Undo / clear current word
        if (state.currentW > 0) {
          state.currentW--;
          state.localLyrics[state.currentV].words[state.currentW].start = 0;
          state.localLyrics[state.currentV].words[state.currentW].end = 0;
        } else if (state.currentV > 0) {
          state.currentV--;
          state.currentW = state.localLyrics[state.currentV].words.length - 1;
          state.localLyrics[state.currentV].words[state.currentW].start = 0;
          state.localLyrics[state.currentV].words[state.currentW].end = 0;
        }
        renderMatrix(els, onRenderBlocks);
        onRenderBlocks();
        updateTelemetry(els);
      }
    } else if (e.code === 'Tab') {
      e.preventDefault();
      if (e.shiftKey) {
        if (state.currentW > 0) state.currentW--;
        else if (state.currentV > 0) { state.currentV--; state.currentW = state.localLyrics[state.currentV].words.length - 1; }
      } else {
        if (state.currentW < state.localLyrics[state.currentV]?.words.length - 1) state.currentW++;
        else if (state.currentV < state.localLyrics.length - 1) { state.currentV++; state.currentW = 0; }
      }
      renderMatrix(els, onRenderBlocks);
    } else if (e.key === '[' || e.key === ']') {
      // Nudge active word timing
      const delta = e.key === ']' ? 0.05 : -0.05;
      const w = state.localLyrics[state.currentV]?.words[state.currentW];
      if (w && w.start > 0) {
        w.start = Math.max(0, parseFloat((w.start + delta).toFixed(3)));
        renderMatrix(els, onRenderBlocks);
        onRenderBlocks();
      }
    }
  });

  // Global Transport Keydown (K, J, L, Ctrl+S, ?)
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'TEXTAREA') {
      return;
    }

    if (e.code === 'KeyK') {
      e.preventDefault();
      togglePlay();
    } else if (e.code === 'KeyJ') {
      e.preventDefault();
      vid.currentTime = Math.max(0, vid.currentTime - 2);
    } else if (e.code === 'KeyL') {
      e.preventDefault();
      vid.currentTime = Math.min(vid.duration, vid.currentTime + 2);
    } else if (e.code === 'KeyS' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      onSaveMaster();
    } else if (e.key === '?') {
      els.shortcutsModal.classList.add('open');
    }
  });

  // Offset Steppers
  const adjustOffset = (delta: number) => {
    const updated = parseFloat((state.globalOffset + delta).toFixed(3));
    setOffset(updated);
    offsetDisplay.textContent = `${updated >= 0 ? '+' : ''}${updated.toFixed(2)}s`;
  };

  document.getElementById('btn-offset-m100')?.addEventListener('click', () => adjustOffset(-0.1));
  document.getElementById('btn-offset-m50')?.addEventListener('click', () => adjustOffset(-0.05));
  document.getElementById('btn-offset-p50')?.addEventListener('click', () => adjustOffset(0.05));
  document.getElementById('btn-offset-p100')?.addEventListener('click', () => adjustOffset(0.1));

  // Playback Rate Selector
  document.querySelectorAll('[data-rate]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-rate]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const rate = parseFloat(btn.getAttribute('data-rate') || '1.0');
      setPlaybackRate(rate);
      vid.playbackRate = rate;
    });
  });
}
