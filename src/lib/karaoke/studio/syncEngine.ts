import { state, setOffset, setPlaybackRate } from './state';
import { renderMatrix, updateTelemetry } from './renderer';
import { formatTime } from './format';
import { ALL_PUNCT_REGEX } from '../naming';
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

      const stampedV = state.currentV;
      const stampedW = state.currentW;

      // 1. Stamp start of current word
      verse.words[stampedW].start = Math.max(0, time);

      // 2. If first word of verse, set verseStart
      if (stampedW === 0) {
        verse.verseStart = Math.max(0, time);
      }

      // 3. Close end timestamp of previous word
      if (stampedW > 0) {
        verse.words[stampedW - 1].end = Math.max(verse.words[stampedW - 1].start, time);
      } else if (stampedV > 0) {
        const prevV = state.localLyrics[stampedV - 1];
        if (prevV.words.length > 0) {
          const lastW = prevV.words[prevV.words.length - 1];
          lastW.end = Math.max(lastW.start, time);
          prevV.verseEnd = Math.max(prevV.verseStart, time);
        }
      }

      // 4. Advance target indices
      state.currentW++;
      if (state.currentW >= verse.words.length) {
        const lastWord = verse.words[stampedW];
        if (lastWord && (!lastWord.end || lastWord.end <= lastWord.start)) {
          lastWord.end = parseFloat((time + 1.5).toFixed(3));
        }
        verse.verseEnd = parseFloat(((lastWord?.end || time) + 0.5).toFixed(3));
        state.currentW = 0;
        state.currentV++;
      }

      // Automatically skip any standalone punctuation words
      while (
        state.currentV < state.localLyrics.length &&
        state.localLyrics[state.currentV]?.words?.[state.currentW] &&
        ALL_PUNCT_REGEX.test(state.localLyrics[state.currentV].words[state.currentW].word.trim())
      ) {
        state.currentW++;
        if (state.currentW >= state.localLyrics[state.currentV].words.length) {
          state.currentW = 0;
          state.currentV++;
        }
      }

      // In-place DOM update within current verse
      if (state.currentV === stampedV) {
        const stampedChip = document.getElementById(`chip-${stampedV}-${stampedW}`);
        if (stampedChip) {
          stampedChip.classList.add('timed');
          stampedChip.classList.remove('target-next');
          const tsEl = stampedChip.querySelector('.word-timestamp');
          if (tsEl) tsEl.textContent = `${time.toFixed(2)}s`;
        }

        const nextChip = document.getElementById(`chip-${state.currentV}-${state.currentW}`);
        if (nextChip) {
          nextChip.classList.add('target-next');
        }

        if (stampedW === 0) {
          const rangeEl = document.querySelector(`#card-v-${stampedV} .verse-time-range`);
          if (rangeEl && verse.verseStart > 0) {
            rangeEl.textContent = `${formatTime(verse.verseStart)} → ${formatTime(verse.verseEnd || 0)}`;
          }
        }

        onRenderBlocks();
        updateTelemetry(els);
      } else {
        // Transition to next verse: full render to switch active card and scroll smoothly
        renderMatrix(els, onRenderBlocks);
        onRenderBlocks();
        updateTelemetry(els);
      }
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
