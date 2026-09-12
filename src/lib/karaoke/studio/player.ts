import { state } from './state';
import { formatTime } from './format';
import type { getStudioElements } from './dom';

type StudioElements = ReturnType<typeof getStudioElements>;

/**
 * Initializes the video monitor, playhead scrubber, and active lyric HUD
 */
export function initPlayer(els: StudioElements) {
  const {
    vid,
    hudCurrentTime,
    hudTotalTime,
    timelineTrack,
    timelinePlayhead,
    timelineBlocksContainer,
    activeHud,
    activeHudWords,
    activeHudTranslation,
    btnPlayPause,
    playPauseLabel,
    btnSeekBack,
    btnSeekFwd
  } = els;

  // Toggle Play / Pause
  const togglePlay = () => {
    if (vid.paused) {
      vid.play().then(() => {
        playPauseLabel.textContent = 'Pause (K)';
      }).catch(console.warn);
    } else {
      vid.pause();
      playPauseLabel.textContent = 'Play (K)';
    }
  };

  btnPlayPause.addEventListener('click', togglePlay);
  btnSeekBack.addEventListener('click', () => { vid.currentTime = Math.max(0, vid.currentTime - 2); });
  btnSeekFwd.addEventListener('click', () => { vid.currentTime = Math.min(vid.duration, vid.currentTime + 2); });

  // Timeline Scrubber Seek
  timelineTrack.addEventListener('click', (e) => {
    const rect = timelineTrack.getBoundingClientRect();
    const clickPct = (e.clientX - rect.left) / rect.width;
    if (vid.duration > 0) {
      vid.currentTime = clickPct * vid.duration;
    }
  });

  // Timeupdate handler (Playhead & Active HUD)
  vid.addEventListener('timeupdate', () => {
    const time = vid.currentTime;
    hudCurrentTime.textContent = formatTime(time);
    hudTotalTime.textContent = formatTime(vid.duration || 0);

    // Update playhead position
    if (vid.duration > 0) {
      const pct = (time / vid.duration) * 100;
      timelinePlayhead.style.left = `${pct}%`;
    }

    // Detect currently active verse and word
    const adjustedTime = time - state.globalOffset;
    let activeV = -1;
    let activeW = -1;

    for (let i = 0; i < state.localLyrics.length; i++) {
      const v = state.localLyrics[i];
      if (adjustedTime >= v.verseStart && adjustedTime <= v.verseEnd) {
        activeV = i;
        for (let j = 0; j < v.words.length; j++) {
          const w = v.words[j];
          if (adjustedTime >= w.start && adjustedTime <= w.end) {
            activeW = j;
            break;
          }
        }
        break;
      }
    }

    // Active singing word chip highlight
    document.querySelectorAll('.word-chip.active-singing').forEach(el => el.classList.remove('active-singing'));
    if (activeV !== -1 && activeW !== -1) {
      const activeChip = document.getElementById(`chip-${activeV}-${activeW}`);
      if (activeChip) activeChip.classList.add('active-singing');
    }

    // Update Active HUD
    if (activeV !== -1) {
      activeHud.style.display = 'flex';
      const verse = state.localLyrics[activeV];
      activeHudWords.innerHTML = verse.words.map((w, idx) => {
        const isSinging = idx === activeW;
        const style = isSinging
          ? 'color: var(--accent-cyan); text-shadow: 0 0 10px rgba(6,182,212,0.6);'
          : 'color: rgba(255,255,255,0.4);';
        const display = w.furigana
          ? `<span class="yomitan-ruby" data-furi="${w.furigana}">${w.word}</span>`
          : w.word;
        return `<span style="${style}">${display}</span>`;
      }).join(' ');
      activeHudTranslation.textContent = verse.translation || '';
    } else {
      activeHud.style.display = 'none';
    }
  });

  vid.addEventListener('loadedmetadata', () => {
    hudTotalTime.textContent = formatTime(vid.duration);
    renderTimelineBlocks(timelineBlocksContainer, vid.duration);
  });

  return {
    togglePlay,
    renderBlocks: () => renderTimelineBlocks(timelineBlocksContainer, vid.duration)
  };
}

/**
 * Draws verse boundary markers on the scrubber track
 */
export function renderTimelineBlocks(container: HTMLElement, duration: number) {
  container.innerHTML = '';
  const dur = duration || 1;

  state.localLyrics.forEach(v => {
    if (v.verseStart > 0 && v.verseEnd > v.verseStart) {
      const startPct = Math.max(0, Math.min(100, (v.verseStart / dur) * 100));
      const endPct = Math.max(0, Math.min(100, (v.verseEnd / dur) * 100));
      const widthPct = Math.max(0.5, endPct - startPct);

      const block = document.createElement('div');
      block.className = 'timeline-verse-block';
      block.style.left = `${startPct}%`;
      block.style.width = `${widthPct}%`;
      container.appendChild(block);
    }
  });
}
