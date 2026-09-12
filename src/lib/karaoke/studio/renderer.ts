import { state, setTargetIndices } from './state';
import { formatTime } from './format';
import type { getStudioElements } from './dom';

type StudioElements = ReturnType<typeof getStudioElements>;

/**
 * Updates telemetry metrics (words timed %, total verses)
 */
export function updateTelemetry(els: StudioElements): void {
  let totalWords = 0;
  let timedWords = 0;

  state.localLyrics.forEach(v => {
    v.words.forEach(w => {
      totalWords++;
      if (w.start > 0 || (w.end && w.end > 0)) {
        timedWords++;
      }
    });
  });

  const pct = totalWords > 0 ? Math.round((timedWords / totalWords) * 100) : 0;
  els.syncProgressFill.style.width = `${pct}%`;
  els.statsWordsTimed.textContent = `${timedWords} / ${totalWords} (${pct}%)`;
  els.statsVersesCount.textContent = String(state.localLyrics.length);
}

/**
 * Renders the matrix verse cards and interactive word chips
 */
export function renderMatrix(els: StudioElements, onRenderBlocks: () => void): void {
  const { versesContainer, matrixPane, vid } = els;

  if (state.localLyrics.length === 0) {
    versesContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🎵</div>
        <div style="font-weight: 700; font-size: 15px; color: var(--text-main);">No Lyrics Synced Yet</div>
        <p style="font-size: 12px; max-width: 320px;">This track has no lyrics file committed yet. Ingest raw lyrics from a paste/LRC or manually add your first verse.</p>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-secondary" id="btn-empty-paste">📋 Paste Raw / LRC</button>
          <button class="btn btn-primary" id="btn-empty-add">+ Add First Verse</button>
        </div>
      </div>
    `;

    document.getElementById('btn-empty-paste')?.addEventListener('click', () => {
      els.ingestModal.classList.add('open');
    });
    document.getElementById('btn-empty-add')?.addEventListener('click', () => {
      state.localLyrics.push({
        verseStart: 0,
        verseEnd: 0,
        words: [{ word: 'FirstWord ', start: 0, end: 0 }]
      });
      renderMatrix(els, onRenderBlocks);
      updateTelemetry(els);
      onRenderBlocks();
    });
    return;
  }

  versesContainer.innerHTML = state.localLyrics.map((verse, vIdx) => {
    const isCurrentVerse = vIdx === state.currentV;
    const rangeDisplay = verse.verseStart > 0
      ? `${formatTime(verse.verseStart)} → ${formatTime(verse.verseEnd)}`
      : '--:--.---';

    return `
      <div class="verse-card ${isCurrentVerse ? 'active' : ''}" id="card-v-${vIdx}">
        <div class="verse-card-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="verse-id-badge">#${String(vIdx + 1).padStart(2, '0')}</span>
            <span class="verse-time-range">${rangeDisplay}</span>
          </div>
          <div class="verse-actions">
            <button class="icon-btn" data-action="seek-verse" data-v="${vIdx}" title="Seek video to verse">▶</button>
            <button class="icon-btn" data-action="add-word-to-v" data-v="${vIdx}" title="Add word to verse">+</button>
            <button class="icon-btn danger" data-action="del-verse" data-v="${vIdx}" title="Delete verse">✕</button>
          </div>
        </div>

        <div class="words-grid">
          ${verse.words.map((w, wIdx) => {
            const isTimed = w.start > 0 || w.end > 0;
            const isTargetNext = vIdx === state.currentV && wIdx === state.currentW;
            const displayWord = w.furigana
              ? `<span class="yomitan-ruby" data-furi="${w.furigana}">${w.word}</span>`
              : w.word;

            return `
              <div class="word-chip ${isTimed ? 'timed' : ''} ${isTargetNext ? 'target-next' : ''}" 
                   data-v="${vIdx}" data-w="${wIdx}" id="chip-${vIdx}-${wIdx}">
                <span class="word-text">${displayWord}</span>
                <span class="word-timestamp">${w.start > 0 ? w.start.toFixed(2) + 's' : '--'}</span>
              </div>
            `;
          }).join('')}
        </div>

        <div class="verse-inputs">
          <input type="text" class="field-input" placeholder="Speaker" value="${verse.speaker || ''}" 
                 data-action="update-speaker" data-v="${vIdx}" />
          <input type="text" class="field-input" placeholder="Localized Translation" value="${verse.translation || ''}" 
                 data-action="update-translation" data-v="${vIdx}" />
        </div>
      </div>
    `;
  }).join('');

  // Attach Word Chip Listeners (Seek & Focus without window scroll)
  versesContainer.querySelectorAll('.word-chip').forEach(el => {
    el.addEventListener('click', () => {
      const v = Number(el.getAttribute('data-v'));
      const w = Number(el.getAttribute('data-w'));
      setTargetIndices(v, w);

      const targetWord = state.localLyrics[v]?.words[w];
      const targetTime = (targetWord?.start && targetWord.start > 0)
        ? targetWord.start
        : (state.localLyrics[v]?.verseStart || 0);

      if (targetTime > 0) {
        vid.currentTime = Math.max(0, targetTime + state.globalOffset);
      }

      renderMatrix(els, onRenderBlocks);
      matrixPane.focus({ preventScroll: true });
    });
  });

  // Attach Verse Actions
  versesContainer.querySelectorAll('[data-action="seek-verse"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const v = Number(btn.getAttribute('data-v'));
      setTargetIndices(v, 0);
      const start = state.localLyrics[v]?.verseStart || 0;
      if (start > 0) vid.currentTime = Math.max(0, start + state.globalOffset);
      renderMatrix(els, onRenderBlocks);
    });
  });

  versesContainer.querySelectorAll('[data-action="add-word-to-v"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const v = Number(btn.getAttribute('data-v'));
      const wordText = prompt('Enter new word text:');
      if (wordText) {
        state.localLyrics[v].words.push({ word: wordText + ' ', start: 0, end: 0 });
        renderMatrix(els, onRenderBlocks);
        updateTelemetry(els);
        onRenderBlocks();
      }
    });
  });

  versesContainer.querySelectorAll('[data-action="del-verse"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const v = Number(btn.getAttribute('data-v'));
      if (confirm(`Delete verse #${v + 1}?`)) {
        state.localLyrics.splice(v, 1);
        if (state.currentV >= state.localLyrics.length) {
          state.currentV = Math.max(0, state.localLyrics.length - 1);
        }
        state.currentW = 0;
        renderMatrix(els, onRenderBlocks);
        updateTelemetry(els);
        onRenderBlocks();
      }
    });
  });

  versesContainer.querySelectorAll('[data-action="update-speaker"]').forEach(input => {
    input.addEventListener('change', (e) => {
      const v = Number(input.getAttribute('data-v'));
      state.localLyrics[v].speaker = (e.target as HTMLInputElement).value.trim() || undefined;
    });
  });

  versesContainer.querySelectorAll('[data-action="update-translation"]').forEach(input => {
    input.addEventListener('change', (e) => {
      const v = Number(input.getAttribute('data-v'));
      state.localLyrics[v].translation = (e.target as HTMLInputElement).value.trim() || undefined;
    });
  });

  // Smooth scroll active card vertically inside the verses container ONLY (never scroll window)
  const activeCard = document.getElementById(`card-v-${state.currentV}`);
  if (activeCard && versesContainer) {
    const cardTop = activeCard.offsetTop;
    const containerTop = versesContainer.offsetTop;
    versesContainer.scrollTo({
      top: Math.max(0, cardTop - containerTop - 12),
      behavior: 'smooth'
    });
  }
}
