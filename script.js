    import { songsDictionary } from '../data/lyrics.ts';
    document.addEventListener('DOMContentLoaded', async () => {
      // 1. Fetch live presence
      const pfp = document.getElementById('mini-pfp');
      const stat = document.getElementById('mini-status');
      const usernameSpan = document.getElementById('discord-username');
      const colors = { online: '#23a559', idle: '#f0b232', dnd: '#f23f43', offline: '#80848e' };
      
      const updatePresence = async () => {
        try {
          const res = await fetch('https://gewoonthy.onrender.com/api/me', { cache: 'no-store' });
          if (res.ok) {
              const data = await res.json();
              if (data.avatar_url && pfp) pfp.src = data.avatar_url;
              if (data.status && stat) stat.style.backgroundColor = colors[data.status] || colors.offline;
              if (data.username && usernameSpan) usernameSpan.textContent = data.username;
          }
        } catch (e) {}
      };
      
      await updatePresence();
      setInterval(updatePresence, 15000);

      // Randomize Video Logic
      const availableVideos = Object.keys(songsDictionary);
      let playedVideos = [];
      let isNewVisitor = true;
      try {
        const stored = localStorage.getItem('playedVideos');
        if (stored) {
            playedVideos = JSON.parse(stored);
            if (playedVideos.length > 0) isNewVisitor = false;
        }
      } catch (e) {}

      // Filter out played videos
      let remaining = availableVideos.filter(v => !playedVideos.includes(v));

      if (remaining.length === 0) {
        const lastPlayed = playedVideos[playedVideos.length - 1];
        playedVideos = [lastPlayed];
        remaining = availableVideos.filter(v => v !== lastPlayed);
      }

      // Pick random or force Gabrielle for new visitors
      let selectedVideo;
      if (isNewVisitor && availableVideos.includes('Gabrielle - 5 fine frøkner.mp4')) {
        selectedVideo = 'Gabrielle - 5 fine frøkner.mp4';
      } else {
        selectedVideo = remaining[Math.floor(Math.random() * remaining.length)];
      }
      
      playedVideos.push(selectedVideo);
      localStorage.setItem('playedVideos', JSON.stringify(playedVideos));

      // Setup data
      let songData = songsDictionary[selectedVideo];
      let lyricsData = songData.lyricsData;
      let GLOBAL_OFFSET = songData.globalOffset || 0;
      let subtitle = songData.subtitle || 'In the meantime, check out this banger:';
      
      const subtitleEl = document.getElementById('anthem-subtitle');
      if (subtitleEl) subtitleEl.textContent = subtitle;

      // 2. Setup video player
      const vid = document.getElementById('anthem-video');
      const audioEl = document.getElementById('anthem-audio');
      const wrapper = document.getElementById('player-wrapper');
      const lyricsContainer = document.getElementById('lyrics-container');

      if (vid && audioEl) {
        vid.muted = true;
        
        vid.addEventListener('play', () => audioEl.play().catch(()=>{}));
        vid.addEventListener('pause', () => audioEl.pause());
        vid.addEventListener('seeked', () => { audioEl.currentTime = vid.currentTime; });
        vid.addEventListener('volumechange', () => { audioEl.volume = vid.volume; audioEl.muted = vid.muted; });
      }

      const safePlay = async () => {
        try {
          await vid.play();
        } catch (e) {
          vid.muted = true;
          try {
            await vid.play();
            const volIcon = document.getElementById('icon-vol');
            const volume = document.getElementById('cc-volume');
            if (volIcon) volIcon.innerHTML = '<path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>';
            if (volume) { volume.value = 0; volume.style.setProperty('--val', '0%'); }
          } catch (err) {}
        }
      };
      
      if (vid) {
        vid.volume = 0.35;
        vid.src = `https://media.thiago.qzz.io/media/${encodeURIComponent(selectedVideo)}`;
        if (audioEl) {
          audioEl.src = `https://media.thiago.qzz.io/media/${encodeURIComponent(selectedVideo)}`;
          audioEl.load();
        }
        
        if (selectedVideo.includes('IC3PEAK')) {
          const wrapper = document.querySelector('.custom-player-wrapper');
          if (wrapper) wrapper.style.aspectRatio = '4 / 3';
          vid.style.objectFit = 'cover';
        } else {
          const wrapper = document.querySelector('.custom-player-wrapper');
          if (wrapper) wrapper.style.aspectRatio = '16 / 9';
          vid.style.objectFit = 'contain';
        }

        if (lyricsContainer && typeof lyricsData !== 'undefined') {
          lyricsContainer.innerHTML = lyricsData.map((verse, vIdx) => `
            <div class="verse" id="verse-${vIdx}">
              ${verse.speaker ? `<span class="speaker" style="margin-right: 0.5em;">${verse.speaker}</span>` : ''}
              ${verse.words.map((w, wIdx) => `<span class="word" id="word-${vIdx}-${wIdx}">${w.word} </span>`).join('')}
            </div>
          `).join('');
        }

        vid.load();
        safePlay();

        // Karaoke Engine
        let activeVerseIndex = -1;
        let activeWordIndex = -1;
        let animationFrameId = null;
        let inactivityTimer = null;
        
        let lastWordTime = Date.now();
        const sideLeft = document.getElementById('gab-side-left');
        const sideRight = document.getElementById('gab-side-right');
        const isDesktop = !window.matchMedia("(pointer: coarse)").matches;
        let currentSideWordLeftEl = null;
        let currentSideWordRightEl = null;
        let lastTopPos = 50;

        let isGlobalBridge = false;

        const updateLyrics = () => {
          const time = vid.currentTime - (typeof GLOBAL_OFFSET !== 'undefined' ? GLOBAL_OFFSET : 0);
          
          let newVerseIndex = -1;
          let newWordIndex = -1;
          
          if (time >= 0 && typeof lyricsData !== 'undefined') {
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
          
          let verseChanged = false;
          if (newVerseIndex !== activeVerseIndex) {
            verseChanged = true;
            document.querySelectorAll('.verse.active').forEach(v => v.classList.remove('active'));
            if (newVerseIndex !== -1) {
              const newVerse = document.getElementById(`verse-${newVerseIndex}`);
              if (newVerse) newVerse.classList.add('active');
            }
            activeVerseIndex = newVerseIndex;
          }
          
          if (newWordIndex !== activeWordIndex || verseChanged) {
            document.querySelectorAll('.word.active').forEach(w => w.classList.remove('active'));
            
            if (newWordIndex !== -1 && newVerseIndex !== -1) {
              const newWord = document.getElementById(`word-${newVerseIndex}-${newWordIndex}`);
              if (newWord) newWord.classList.add('active');
              
              lastWordTime = Date.now();
              lyricsContainer.style.opacity = '1';
              
              if (isDesktop && selectedVideo === 'Gabrielle - 5 fine frøkner.mp4') {
                const currentVerseText = lyricsData[newVerseIndex].words.map(w => w.word).join('');
                const bridgePhrases = ["kjøre meg opp", "kjøre meg ned", "sprenge i kok", "ingen andre eg heller", "spiller ingen rolle"];
                const isBridge = bridgePhrases.some(p => currentVerseText.toLowerCase().includes(p.toLowerCase()));
                isGlobalBridge = isBridge;
                
                if (isBridge && sideLeft && sideRight) {
                  lyricsContainer.style.opacity = '0';
                  
                  if (currentSideWordLeftEl) {
                    currentSideWordLeftEl.classList.add('fade-out');
                    const toRemove = currentSideWordLeftEl;
                    setTimeout(() => toRemove.remove(), 600);
                  }
                  if (currentSideWordRightEl) {
                    currentSideWordRightEl.classList.add('fade-out');
                    const toRemove = currentSideWordRightEl;
                    setTimeout(() => toRemove.remove(), 600);
                  }
                  
                  const wordText = lyricsData[newVerseIndex].words[newWordIndex].word.trim();
                  if (wordText) {
                    const baseSize = 2 + Math.random() * 3; 
                    const finalSize = wordText.length > 8 ? baseSize / 1.5 : baseSize;
                    
                    let newTopPos;
                    let attempts = 0;
                    do {
                      newTopPos = Math.random() * 70 + 10;
                      attempts++;
                    } while (Math.abs(newTopPos - lastTopPos) < 20 && attempts < 10);
                    lastTopPos = newTopPos;
                    const topPos = newTopPos + '%';
                    
                    const wordElLeft = document.createElement('div');
                    wordElLeft.className = 'gab-side-word';
                    wordElLeft.textContent = wordText;
                    wordElLeft.style.fontSize = `min(${finalSize}rem, 80cqw)`;
                    wordElLeft.style.top = topPos;
                    
                    const wordElRight = document.createElement('div');
                    wordElRight.className = 'gab-side-word';
                    wordElRight.textContent = wordText;
                    wordElRight.style.fontSize = `min(${finalSize}rem, 80cqw)`;
                    wordElRight.style.top = topPos;
                    
                    sideLeft.appendChild(wordElLeft);
                    sideRight.appendChild(wordElRight);
                    
                    currentSideWordLeftEl = wordElLeft;
                    currentSideWordRightEl = wordElRight;
                  }
                } else {
                  lyricsContainer.style.opacity = '1';
                  if (currentSideWordLeftEl) {
                    currentSideWordLeftEl.classList.add('fade-out');
                    const toRemove = currentSideWordLeftEl;
                    setTimeout(() => toRemove.remove(), 600);
                    currentSideWordLeftEl = null;
                  }
                  if (currentSideWordRightEl) {
                    currentSideWordRightEl.classList.add('fade-out');
                    const toRemove = currentSideWordRightEl;
                    setTimeout(() => toRemove.remove(), 600);
                    currentSideWordRightEl = null;
                  }
                }
              }
              
              clearTimeout(inactivityTimer);
              inactivityTimer = setTimeout(() => {
                if (lyricsContainer) lyricsContainer.style.opacity = '0';
                if (currentSideWordLeftEl) {
                  currentSideWordLeftEl.classList.add('fade-out');
                  const toRemove = currentSideWordLeftEl;
                  setTimeout(() => toRemove.remove(), 600);
                  currentSideWordLeftEl = null;
                }
                if (currentSideWordRightEl) {
                  currentSideWordRightEl.classList.add('fade-out');
                  const toRemove = currentSideWordRightEl;
                  setTimeout(() => toRemove.remove(), 600);
                  currentSideWordRightEl = null;
                }
              }, 4000);
            }
            activeWordIndex = newWordIndex;
            activeVerseIndex = newVerseIndex;
          }
          
          animationFrameId = requestAnimationFrame(updateLyrics);
        };
        
        // Start the loop unconditionally
        animationFrameId = requestAnimationFrame(updateLyrics);
        
        vid.addEventListener('play', () => {
          if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
        });
        
        vid.addEventListener('pause', () => {
          // No longer canceling the animation frame here to keep updateLyrics running
        });
        
        vid.addEventListener('seeked', () => {
          if (!animationFrameId) {
            animationFrameId = requestAnimationFrame(() => {
              updateLyrics();
              cancelAnimationFrame(animationFrameId);
              animationFrameId = null;
            });
          }
        });
        
        // Custom UI Logic for Desktop
        if (isDesktop) {
          vid.removeAttribute('controls');
          
          const playBtn = document.getElementById('cc-play');
          const playIcon = document.getElementById('icon-play');
          const progress = document.getElementById('cc-progress');
          const timeDisp = document.getElementById('cc-time');
          const muteBtn = document.getElementById('cc-mute');
          const volIcon = document.getElementById('icon-vol');
          const volume = document.getElementById('cc-volume');
          const fsBtn = document.getElementById('cc-fullscreen');
          
          const formatTime = (time) => {
            if (isNaN(time)) return "0:00";
            const m = Math.floor(time / 60);
            const s = Math.floor(time % 60);
            return `${m}:${s.toString().padStart(2, '0')}`;
          };
          
          let isDragging = false;
          
          const togglePlay = () => {
            vid.paused ? vid.play() : vid.pause();
          };
          
          playBtn.addEventListener('click', togglePlay);
          vid.addEventListener('click', togglePlay);
          
          vid.addEventListener('play', () => {
            playIcon.innerHTML = '<path d="M6 4h4v16H6zm8 0h4v16h-4z"/>';
          });
          
          vid.addEventListener('pause', () => {
            playIcon.innerHTML = '<path d="M5 3l14 9-14 9v-18z"/>';
          });
          
          vid.addEventListener('timeupdate', () => {
            timeDisp.textContent = `${formatTime(vid.currentTime)} / ${formatTime(vid.duration)}`;
            if (!isDragging && vid.duration) {
              const pct = (vid.currentTime / vid.duration) * 100;
              progress.value = pct;
              progress.style.setProperty('--val', `${pct}%`);
            }
          });
          
          vid.addEventListener('loadedmetadata', () => {
            timeDisp.textContent = `0:00 / ${formatTime(vid.duration)}`;
          });
          
          progress.addEventListener('input', (e) => {
            isDragging = true;
            const pct = e.target.value;
            e.target.style.setProperty('--val', `${pct}%`);
            vid.currentTime = (pct / 100) * vid.duration;
          });
          
          progress.addEventListener('change', () => {
            isDragging = false;
          });
          
          muteBtn.addEventListener('click', () => {
            vid.muted = !vid.muted;
            if(vid.muted || vid.volume === 0) {
              volIcon.innerHTML = '<path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"/>';
              volume.value = 0;
              volume.style.setProperty('--val', `0%`);
            } else {
              volIcon.innerHTML = '<path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07"/>';
              volume.value = vid.volume;
              volume.style.setProperty('--val', `${vid.volume * 100}%`);
            }
          });
          
          volume.addEventListener('input', (e) => {
            const val = e.target.value;
            vid.volume = val;
            vid.muted = (val == 0);
            e.target.style.setProperty('--val', `${val * 100}%`);
            if(vid.muted) volIcon.innerHTML = '<path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"/>';
            else volIcon.innerHTML = '<path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07"/>';
          });
          
          fsBtn.addEventListener('click', () => {
            if (!document.fullscreenElement && !document.webkitFullscreenElement) {
              if (wrapper.requestFullscreen) wrapper.requestFullscreen();
              else if (wrapper.webkitRequestFullscreen) wrapper.webkitRequestFullscreen();
              else if (vid.webkitEnterFullscreen) vid.webkitEnterFullscreen();
            } else {
              if (document.exitFullscreen) document.exitFullscreen();
              else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            }
          });
          
          // Auto-hide controls timeout
          let hideTimeout;
          wrapper.addEventListener('mousemove', () => {
            wrapper.classList.add('interacting');
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => wrapper.classList.remove('interacting'), 2000);
          });
        }
      }

      // 3. Vote System
      const btnLike = document.getElementById('btn-like');
      const btnDislike = document.getElementById('btn-dislike');
      let fileName = selectedVideo;
      
      const updateVoteUI = (l, d) => {
        if(l) btnLike.classList.add('active'); else btnLike.classList.remove('active');
        if(d) btnDislike.classList.add('active'); else btnDislike.classList.remove('active');
      };

      try {
        const res = await fetch(`/api/vote?file_name=${encodeURIComponent(fileName)}`, { cache: 'no-store' });
        if (res.ok) {
          const { liked, desliked } = await res.json();
          updateVoteUI(liked, desliked);
        }
      } catch (e) {}

      const castVote = async (action) => {
        try {
          const res = await fetch('/api/vote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ file_name: fileName, action }),
            cache: 'no-store'
          });
          if (res.ok) {
            const { liked, desliked } = await res.json();
            updateVoteUI(liked, desliked);
          }
        } catch(e) {}
      };

      btnLike.addEventListener('click', () => castVote('like'));
      btnDislike.addEventListener('click', () => castVote('dislike'));

      const btnShuffle = document.getElementById('btn-shuffle');
      if (btnShuffle) {
        btnShuffle.addEventListener('click', () => {
          let rem = availableVideos.filter(v => v !== selectedVideo);
          if (rem.length === 0) rem = availableVideos;
          const next = rem[Math.floor(Math.random() * rem.length)];
          playedVideos.push(next);
          localStorage.setItem('playedVideos', JSON.stringify(playedVideos));

          selectedVideo = next;
          fileName = next;
          songData = songsDictionary[selectedVideo];
          lyricsData = songData.lyricsData;
          GLOBAL_OFFSET = songData.globalOffset || 0;
          subtitle = songData.subtitle || 'In the meantime, check out this banger:';
          
          if (subtitleEl) subtitleEl.textContent = subtitle;

          lyricsContainer.innerHTML = '';
          activeVerseIndex = -1;
          activeWordIndex = -1;
          lyricsContainer.style.opacity = '1';

          if (lyricsContainer && typeof lyricsData !== 'undefined') {
            lyricsContainer.innerHTML = lyricsData.map((verse, vIdx) => `
              <div class="verse" id="verse-${vIdx}">
                ${verse.speaker ? `<span class="speaker" style="margin-right: 0.5em;">${verse.speaker}</span>` : ''}
                ${verse.words.map((w, wIdx) => `<span class="word" id="word-${vIdx}-${wIdx}">${w.word} </span>`).join('')}
              </div>
            `).join('');
          }

          if (currentSideWordLeftEl) {
            currentSideWordLeftEl.remove();
            currentSideWordLeftEl = null;
          }
          if (currentSideWordRightEl) {
            currentSideWordRightEl.remove();
            currentSideWordRightEl = null;
          }

          vid.pause();
          vid.src = `https://media.thiago.qzz.io/media/${encodeURIComponent(selectedVideo)}`;
          if (audioEl) {
            audioEl.src = `https://media.thiago.qzz.io/media/${encodeURIComponent(selectedVideo)}`;
            audioEl.load();
          }
          
          if (selectedVideo.includes('IC3PEAK')) {
            const wrapper = document.querySelector('.custom-player-wrapper');
            if (wrapper) wrapper.style.aspectRatio = '4 / 3';
            vid.style.objectFit = 'cover';
          } else {
            const wrapper = document.querySelector('.custom-player-wrapper');
            if (wrapper) wrapper.style.aspectRatio = '16 / 9';
            vid.style.objectFit = 'contain';
          }
          
          vid.load();
          safePlay();

          fetch(`/api/vote?file_name=${encodeURIComponent(fileName)}`, { cache: 'no-store' })
            .then(r => r.ok ? r.json() : {liked:false, desliked:false})
            .then(d => updateVoteUI(d.liked, d.desliked))
            .catch(() => updateVoteUI(false, false));
        });
      }

      // 5. Audio Spectrum Visualizer
      let audioCtx = null;
      let analyser = null;
      let dataArray = null;
      let bufferLength = 0;
      let vizDrawId = null;
      const canvasLeft = document.getElementById('viz-left');
      const canvasRight = document.getElementById('viz-right');
      const ctxLeft = canvasLeft?.getContext('2d');
      const ctxRight = canvasRight?.getContext('2d');
      
      const initAudio = () => {
        if (!audioCtx && audioEl) {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
          analyser = audioCtx.createAnalyser();
          const source = audioCtx.createMediaElementSource(audioEl);
          source.connect(analyser);
          analyser.connect(audioCtx.destination);
          analyser.fftSize = 512;
          analyser.smoothingTimeConstant = 0.85;
          bufferLength = analyser.frequencyBinCount;
          dataArray = new Uint8Array(bufferLength);
          drawVisualizer();
        }
      };

      const resizeCanvas = () => {
        if(canvasLeft && sideLeft) {
          canvasLeft.width = sideLeft.clientWidth;
          canvasLeft.height = sideLeft.clientHeight;
        }
        if(canvasRight && sideRight) {
          canvasRight.width = sideRight.clientWidth;
          canvasRight.height = sideRight.clientHeight;
        }
      };
      
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();

      const drawVisualizer = () => {
        vizDrawId = requestAnimationFrame(drawVisualizer);
        if (!isDesktop || selectedVideo !== 'Gabrielle - 5 fine frøkner.mp4' || vid.paused) {
          if (ctxLeft) ctxLeft.clearRect(0, 0, canvasLeft.width, canvasLeft.height);
          if (ctxRight) ctxRight.clearRect(0, 0, canvasRight.width, canvasRight.height);
          return;
        }
        
        analyser.getByteFrequencyData(dataArray);
        const wL = canvasLeft.width;
        const hL = canvasLeft.height;
        const wR = canvasRight.width;
        const hR = canvasRight.height;
        
        ctxLeft.clearRect(0, 0, wL, hL);
        ctxRight.clearRect(0, 0, wR, hR);
        const timeScale = Date.now() / 20;
        
        // Dynamic bar spacing for a sleeker look
        const totalBars = Math.floor(bufferLength * 0.75); // Cut off highest frequencies which are often empty
        const barHeightLeft = hL / totalBars;
        const barHeightRight = hR / totalBars;
        const gap = 1.5;
        
        ctxLeft.shadowBlur = 12;
        ctxRight.shadowBlur = 12;
        
        for(let i = 0; i < totalBars; i++) {
          const val = dataArray[i];
          // Apply a non-linear curve to make it look more dynamic
          const pct = Math.pow(val / 255, 1.5);
          
          // Minimum width for presence, maximum 40% of screen
          const barWidthLeft = Math.max(2, wL * 0.4 * pct);
          const barWidthRight = Math.max(2, wR * 0.4 * pct);
          
          if (isGlobalBridge) {
            const hue = ((i / totalBars) * 360 + timeScale) % 360;
            const color = `hsl(${hue}, 100%, 65%)`;
            ctxLeft.fillStyle = color;
            ctxLeft.shadowColor = color;
            ctxRight.fillStyle = color;
            ctxRight.shadowColor = color;
          } else {
            const opacity = 0.2 + pct * 0.8;
            const color = `rgba(255, 255, 255, ${opacity})`;
            ctxLeft.fillStyle = color;
            ctxLeft.shadowColor = `rgba(255, 255, 255, ${opacity * 0.5})`;
            ctxRight.fillStyle = color;
            ctxRight.shadowColor = `rgba(255, 255, 255, ${opacity * 0.5})`;
          }
          
          const yL = hL - (i * barHeightLeft) - barHeightLeft + (gap / 2);
          const drawH = Math.max(1, barHeightLeft - gap);
          
          // Draw left side (spawns from left edge)
          ctxLeft.fillRect(0, yL, barWidthLeft, drawH);
          
          // Draw right side (spawns from right edge)
          const yR = hR - (i * barHeightRight) - barHeightRight + (gap / 2);
          const drawHR = Math.max(1, barHeightRight - gap);
          ctxRight.fillRect(wR - barWidthRight, yR, barWidthRight, drawHR);
        }
      };

      vid.addEventListener('play', initAudio, { once: true });
    });

    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => {
      if (e.keyCode === 123 || 
         (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 67 || e.keyCode === 74)) ||
         (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
        return false;
      }
    });
    
    // Check if devtools open via screen differential (no memory leak)
    setInterval(() => {
      if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
         document.body.innerHTML = '';
      }
    }, 2000);