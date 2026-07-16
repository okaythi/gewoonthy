import { windowManager } from '../WindowManager.js';
import { songsDictionary } from '../../data/lyrics.ts';

export const openKaraokeWindow = () => {
  const availableSongs = Object.keys(songsDictionary);
  
  let leftSidebarHTML = `
    <div class="karaoke-sidebar" style="width: 250px; border-right: 1px solid var(--ubu-border); background: var(--ubu-bg); display: flex; flex-direction: column; overflow-y: auto;">
      <div class="song-item active" data-song="about" style="padding: 10px; cursor: pointer; border-bottom: 1px solid var(--ubu-border); display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.1);">
        <div style="width: 40px; height: 40px; background: var(--ubu-blue); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: bold;">?</div>
        <div>
          <div style="font-weight: bold; font-size: 14px;">About this project</div>
        </div>
      </div>
  `;

  availableSongs.forEach(songFile => {
    const songName = songFile.split(' - ')[1]?.replace('.mp4', '') || songFile.replace('.mp4', '');
    const artistName = songFile.split(' - ')[0] || 'Unknown';
    // We will dynamically fetch the image later, for now we leave an img tag with a placeholder that will be updated
    leftSidebarHTML += `
      <div class="song-item" data-song="${songFile}" style="padding: 10px; cursor: pointer; border-bottom: 1px solid var(--ubu-border); display: flex; align-items: center; gap: 10px;">
        <img class="song-art" data-artist="${encodeURIComponent(artistName)}" data-track="${encodeURIComponent(songName)}" src="https://via.placeholder.com/40" style="width: 40px; height: 40px; border-radius: 4px; object-fit: cover;" />
        <div style="overflow: hidden;">
          <div style="font-weight: bold; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${songName}</div>
          <div style="font-size: 12px; opacity: 0.7; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${artistName}</div>
        </div>
      </div>
    `;
  });

  leftSidebarHTML += `</div>`;

  const contentHTML = `
    <div class="karaoke-layout" style="display: flex; height: 100%; min-height: 500px;">
      ${leftSidebarHTML}
      <div class="karaoke-main" style="flex: 1; display: flex; flex-direction: column; background: #000; position: relative;">
        <!-- Right side content (Video player or About) -->
      </div>
    </div>
  `;

  const win = windowManager.createWindow('Karaoke', contentHTML);
  const mainView = win.querySelector('.karaoke-main');
  const songItems = win.querySelectorAll('.song-item');
  const artImages = win.querySelectorAll('.song-art');

  // Fetch album art from MusicBrainz
  artImages.forEach(img => {
    const artist = decodeURIComponent(img.dataset.artist);
    const track = decodeURIComponent(img.dataset.track);
    // Simple search using MusicBrainz API
    fetch(`https://musicbrainz.org/ws/2/recording/?query=recording:"${track}" AND artist:"${artist}"&fmt=json`)
      .then(res => res.json())
      .then(data => {
        if (data.recordings && data.recordings.length > 0) {
          const releaseId = data.recordings[0].releases?.[0]?.id;
          if (releaseId) {
            return fetch(`https://coverartarchive.org/release/${releaseId}`);
          }
        }
        throw new Error('No release found');
      })
      .then(res => res.json())
      .then(data => {
        if (data.images && data.images.length > 0) {
          img.src = data.images[0].thumbnails.small || data.images[0].image;
        }
      })
      .catch(err => {
        console.log('Could not fetch album art for', track);
        // Fallback or leave as placeholder
      });
  });

  const renderAbout = () => {
    mainView.innerHTML = `
      <div style="padding: 30px; color: white;">
        <h2>About this project</h2>
        <p style="opacity: 0.8; line-height: 1.6; margin-top: 20px;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    `;
  };

  const renderPlayer = (songFile) => {
    // Basic structure for video player, porting from production
    mainView.innerHTML = `
      <div class="karaoke-player-container" style="position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; overflow: hidden;">
        <div id="dynamic-backlight-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; opacity: 0.5;"></div>
        
        <div style="flex: 1; position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; overflow: hidden;">
          <video id="k-vid" crossorigin="anonymous" playsinline style="max-width: 100%; max-height: 100%; z-index: 10; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);"></video>
        </div>
        
        <div id="k-lyrics" style="height: 120px; z-index: 3; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; font-size: 24px; color: white; text-shadow: 1px 1px 4px black; transition: opacity 0.3s; opacity: 0; padding: 10px;">
          <!-- Lyrics inject here -->
        </div>
        
        <div class="k-controls" style="height: 50px; background: rgba(0,0,0,0.8); z-index: 4; display: flex; align-items: center; padding: 0 15px; gap: 15px; border-top: 1px solid rgba(255,255,255,0.1);">
          <button id="k-play" style="background: none; border: none; color: white; cursor: pointer;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </button>
          <div id="k-time" style="color: white; font-size: 12px; font-family: monospace;">0:00 / 0:00</div>
          <input type="range" id="k-progress" value="0" min="0" max="100" style="flex: 1; cursor: pointer;">
          
          <button id="btn-like" style="background: none; border: none; color: white; cursor: pointer; display: flex; align-items: center; gap: 5px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
            <span id="like-count" style="font-size:12px;">0</span>
          </button>
          <button id="btn-dislike" style="background: none; border: none; color: white; cursor: pointer; display: flex; align-items: center; gap: 5px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2"></path></svg>
            <span id="dislike-count" style="font-size:12px;">0</span>
          </button>
          <button id="btn-shuffle" style="background: none; border: none; color: white; cursor: pointer;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
          </button>
        </div>
      </div>
    `;

    // Initialize Video Player JS
    const vid = mainView.querySelector('#k-vid');
    const lyricsContainer = mainView.querySelector('#k-lyrics');
    const playBtn = mainView.querySelector('#k-play');
    const timeDisp = mainView.querySelector('#k-time');
    const progress = mainView.querySelector('#k-progress');
    const btnLike = mainView.querySelector('#btn-like');
    const btnDislike = mainView.querySelector('#btn-dislike');
    const btnShuffle = mainView.querySelector('#btn-shuffle');
    const likeCount = mainView.querySelector('#like-count');
    const dislikeCount = mainView.querySelector('#dislike-count');

    // Voting Logic
    const updateVoteUI = (l, d, totalL, totalD) => {
      btnLike.style.color = l ? '#4CAF50' : 'white';
      btnDislike.style.color = d ? '#F44336' : 'white';
      likeCount.textContent = totalL;
      dislikeCount.textContent = totalD;
    };

    fetch(`/api/vote?file_name=${encodeURIComponent(songFile)}`)
      .then(res => res.json())
      .then(data => updateVoteUI(data.liked, data.desliked, data.totalLikes, data.totalDislikes))
      .catch(e => console.error(e));

    const castVote = (action) => {
      fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file_name: songFile, action })
      })
      .then(res => res.json())
      .then(data => updateVoteUI(data.liked, data.desliked, data.totalLikes, data.totalDislikes))
      .catch(e => console.error(e));
    };

    btnLike.addEventListener('click', () => castVote('like'));
    btnDislike.addEventListener('click', () => castVote('dislike'));

    btnShuffle.addEventListener('click', () => {
      const remaining = availableSongs.filter(s => s !== songFile);
      if(remaining.length > 0) {
        const next = remaining[Math.floor(Math.random() * remaining.length)];
        songItems.forEach(t => t.style.background = t.dataset.song === next ? 'rgba(255,255,255,0.1)' : 'transparent');
        renderPlayer(next);
      }
    });

    // Audio & Lyrics sync logic
    const lyricsData = songsDictionary[songFile].lyrics;
    
    vid.src = \`https://cdn.sudothy.me/\${encodeURIComponent(songFile)}\`;
    vid.volume = 0.5;
    vid.load();
    vid.play().catch(e => console.warn('Autoplay prevented', e));

    if (lyricsData) {
      lyricsContainer.innerHTML = lyricsData.map((verse, vIdx) => \`
        <div class="verse" id="verse-\${vIdx}" style="display: none;">
          \${verse.words.map((w, wIdx) => {
            const display = w.furigana ? \`<ruby>\${w.word}<rt>\${w.furigana}</rt></ruby>\` : w.word;
            return \`<span class="word" id="word-\${vIdx}-\${wIdx}" style="opacity: 0.5; transition: opacity 0.1s; margin: 0 2px;">\${display}</span>\`;
          }).join('')}
        </div>
      \`).join('');
    }

    let activeVerseIndex = -1;
    let activeWordIndex = -1;
    let animationFrameId = null;

    const updateLyrics = () => {
      const time = vid.currentTime;
      let newVerseIndex = -1;
      let newWordIndex = -1;
      
      if (lyricsData) {
        for (let i = 0; i < lyricsData.length; i++) {
          if (time >= lyricsData[i].verseStart && time <= lyricsData[i].verseEnd) {
            newVerseIndex = i;
            for (let j = 0; j < lyricsData[i].words.length; j++) {
              if (time >= lyricsData[i].words[j].start && time <= lyricsData[i].words[j].end) {
                newWordIndex = j;
                break;
              }
            }
            break;
          }
        }
      }

      if (newVerseIndex !== activeVerseIndex) {
        if (activeVerseIndex !== -1) {
          const old = mainView.querySelector(\`#verse-\${activeVerseIndex}\`);
          if (old) old.style.display = 'none';
        }
        if (newVerseIndex !== -1) {
          const newV = mainView.querySelector(\`#verse-\${newVerseIndex}\`);
          if (newV) newV.style.display = 'block';
        }
        activeVerseIndex = newVerseIndex;
      }

      if (newWordIndex !== activeWordIndex || newVerseIndex !== activeVerseIndex) {
        if (newVerseIndex !== -1) {
          lyricsContainer.style.opacity = '1';
          const words = mainView.querySelectorAll(\`#verse-\${newVerseIndex} .word\`);
          words.forEach((w, idx) => {
            if (idx === newWordIndex) {
              w.style.opacity = '1';
              w.style.color = '#4CAF50';
            } else {
              w.style.opacity = '0.5';
              w.style.color = 'white';
            }
          });
        } else {
          lyricsContainer.style.opacity = '0';
        }
        activeWordIndex = newWordIndex;
      }
      
      animationFrameId = requestAnimationFrame(updateLyrics);
    };

    animationFrameId = requestAnimationFrame(updateLyrics);

    const togglePlay = () => vid.paused ? vid.play() : vid.pause();
    playBtn.addEventListener('click', togglePlay);
    vid.addEventListener('click', togglePlay);

    vid.addEventListener('play', () => playBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>');
    vid.addEventListener('pause', () => playBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>');

    const formatTime = (time) => {
      if (isNaN(time)) return "0:00";
      const m = Math.floor(time / 60);
      const s = Math.floor(time % 60);
      return \`\${m}:\${s.toString().padStart(2, '0')}\`;
    };

    let isDragging = false;
    vid.addEventListener('timeupdate', () => {
      timeDisp.textContent = \`\${formatTime(vid.currentTime)} / \${formatTime(vid.duration)}\`;
      if (!isDragging && vid.duration) {
        progress.value = (vid.currentTime / vid.duration) * 100;
      }
    });

    progress.addEventListener('input', (e) => {
      isDragging = true;
      vid.currentTime = (e.target.value / 100) * vid.duration;
    });
    progress.addEventListener('change', () => isDragging = false);

    // Stop animation frame when window closes
    const origClose = win.querySelector('.gnome-close').onclick;
    win.querySelector('.gnome-close').addEventListener('click', () => {
       cancelAnimationFrame(animationFrameId);
    });

    // Dynamic Backlight
    initDynamicBacklight(vid, mainView.querySelector('#dynamic-backlight-container'));
  };

  const initDynamicBacklight = (vidEl, container) => {
    // Thinner dynamic backlight using a canvas
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    // We create multiple layered blurred divs for the backlight
    container.innerHTML = \`
      <div class="bl-layer bl-1" style="position:absolute; top:-10px; left:-10px; right:-10px; bottom:-10px; filter:blur(20px); opacity:0.8; transition: background 0.3s;"></div>
      <div class="bl-layer bl-2" style="position:absolute; top:-20px; left:-20px; right:-20px; bottom:-20px; filter:blur(40px); opacity:0.6; transition: background 0.3s;"></div>
    \`;
    const bl1 = container.querySelector('.bl-1');
    const bl2 = container.querySelector('.bl-2');

    let backlightFrame = null;
    const updateBacklight = () => {
      if (vidEl.paused || vidEl.ended) {
        backlightFrame = requestAnimationFrame(updateBacklight);
        return;
      }
      try {
        ctx.drawImage(vidEl, 0, 0, 64, 64);
        // sample center pixel or average
        const data = ctx.getImageData(0, 0, 64, 64).data;
        let r=0, g=0, b=0;
        for(let i=0; i<data.length; i+=16) {
          r += data[i]; g += data[i+1]; b += data[i+2];
        }
        const count = data.length / 16;
        r = Math.floor(r/count); g = Math.floor(g/count); b = Math.floor(b/count);
        
        bl1.style.background = \`rgba(\${r},\${g},\${b}, 0.5)\`;
        bl2.style.background = \`rgba(\${r},\${g},\${b}, 0.3)\`;
      } catch(e) {}
      
      backlightFrame = requestAnimationFrame(updateBacklight);
    };
    backlightFrame = requestAnimationFrame(updateBacklight);
    
    vidEl.addEventListener('pause', () => cancelAnimationFrame(backlightFrame));
    vidEl.addEventListener('play', () => { backlightFrame = requestAnimationFrame(updateBacklight); });
  };

  songItems.forEach(tab => {
    tab.addEventListener('click', () => {
      songItems.forEach(t => t.style.background = 'transparent');
      tab.style.background = 'rgba(255,255,255,0.1)';
      const song = tab.dataset.song;
      if (song === 'about') {
        renderAbout();
      } else {
        renderPlayer(song);
      }
    });
  });

  // Default
  renderAbout();
};
