import { windowManager } from '../WindowManager.js';
import { loadCatalog, loadLyrics } from '../karaoke/catalog.ts';
import { localesFetcher } from '../LocalesFetcher.js';
import { authManager, AuthState } from '../auth.js';

export const openKaraokeWindow = async () => {
  const i18n = await localesFetcher.fetchWindow('karaoke') || {
    about_project: 'About this project',
    failed_load: 'Failed to load markdown content.'
  };

  const catalog = await loadCatalog();
  const availableSongs = catalog.filter(s => s.isOnR2 && s.hasLyrics);
  
  let leftSidebarHTML = `
    <div class="karaoke-sidebar" style="width: 250px; border-right: 1px solid var(--ubu-border); background: var(--ubu-bg); display: flex; flex-direction: column; overflow-y: auto;">
      <div class="song-item active" data-song="about" style="padding: 10px; cursor: pointer; border-bottom: 1px solid var(--ubu-border); display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.1);">
        <div style="width: 40px; height: 40px; background: var(--ubu-blue); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: bold;">?</div>
        <div>
          <div style="font-weight: bold; font-size: 14px;">${i18n.about_project}</div>
        </div>
      </div>
  `;

  availableSongs.forEach(song => {
    const queryArtist = song.itunesArtist || song.artist;
    const queryTrack = song.itunesTrack || song.title;

    let globeBadge = '';
    if (song.hasTranslation) {
      if (song.isDialect) {
        globeBadge = `<div title="Contains dialect localization" style="display: flex; align-items: center; justify-content: center; margin-left: auto;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E95420" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M 8 4 L 4 4 L 4 20 L 8 20 M 14 4 L 20 12 L 14 20" />
          </svg>
        </div>`;
      } else {
        globeBadge = `<div title="Contains localized translation" style="display: flex; align-items: center; justify-content: center; margin-left: auto;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E95420" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </div>`;
      }
    }

    leftSidebarHTML += `
      <div class="song-item" data-song="${song.id}" style="padding: 10px; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; gap: 10px;">
        <img class="song-art" data-artist="${encodeURIComponent(queryArtist)}" data-track="${encodeURIComponent(queryTrack)}" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><circle cx='12' cy='12' r='3'/></svg>" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><circle cx='12' cy='12' r='3'/></svg>';" style="width: 40px; height: 40px; border-radius: 4px; object-fit: cover;" />
        <div style="overflow: hidden; flex: 1;">
          <div style="font-weight: bold; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${song.title}</div>
          <div style="font-size: 12px; opacity: 0.7; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${song.artist}</div>
        </div>
        ${globeBadge}
      </div>
    `;
  });

  leftSidebarHTML += `</div>`;

  const contentHTML = `
    <style>
      .yomitan-ruby { position: relative; }
      .yomitan-ruby::before {
        content: attr(data-furi);
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.5em;
        line-height: 1;
        margin-bottom: 2px;
        white-space: nowrap;
        pointer-events: none;
        user-select: none;
        color: inherit;
        opacity: 0.85;
      }
      .word-wrapper {
        position: relative;
        display: inline-block;
        vertical-align: baseline;
      }
      .word-base {
        color: rgba(255, 255, 255, 0.45);
        user-select: none;
      }
      .word-highlight {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: #FF7744;
        text-shadow: 0 0 4px rgba(233, 84, 32, 0.8), 0 0 12px rgba(233, 84, 32, 0.4);
        pointer-events: none;
        user-select: none;
        clip-path: inset(0 calc(100% - var(--wipe-progress, 0%)) 0 0);
        will-change: clip-path;
      }
      .k-lyrics-container {
        flex-shrink: 0;
        height: 100px;
        width: 100%;
        margin-top: 8px;
        z-index: 3;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-family: 'Zen Kurenaido', 'Noto Sans JP', 'Great Vibes', system-ui, sans-serif;
        color: white;
        text-shadow: 1px 1px 4px rgba(0,0,0,0.8);
        transition: opacity 0.3s;
        opacity: 0;
        overflow: hidden;
        position: relative;
        padding: 4px 16px;
        box-sizing: border-box;
      }
      .k-line {
        width: 100%;
        min-height: 44px;
        display: flex;
        align-items: center;
        font-size: 26px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: opacity 0.2s ease;
      }
      .k-line-top {
        justify-content: flex-start;
        padding-left: 5%;
      }
      .k-line-bottom {
        justify-content: flex-end;
        padding-right: 5%;
      }
      .k-line.k-line-idle {
        opacity: 0.55;
      }
      .k-line.k-line-active {
        opacity: 1;
      }
      .k-line-translation {
        font-size: 13px;
        font-family: system-ui, sans-serif;
        font-weight: 500;
        opacity: 0.5;
        margin-left: 12px;
        color: rgba(255, 255, 255, 0.85);
        text-shadow: none;
      }
    </style>
    <div class="karaoke-layout" style="display: flex; width: 100%; height: 100%; font-family: 'Noto Sans JP', system-ui, sans-serif;">
      ${leftSidebarHTML}
      <div class="karaoke-main" style="flex: 1; display: flex; flex-direction: column; position: relative; padding: 16px;">
        <!-- Right side content (Video player or About) -->
      </div>
    </div>
  `;

  const win = windowManager.createWindow('Karaoke', contentHTML);
  const mainView = win.querySelector('.karaoke-main');
  const songItems = win.querySelectorAll('.song-item');
  const artImages = win.querySelectorAll('.song-art');

  // Fetch album art from iTunes
  artImages.forEach(img => {
    const artist = decodeURIComponent(img.dataset.artist);
    const track = decodeURIComponent(img.dataset.track);
    let queryTrack = track;
    if (artist.toLowerCase() === 'ic3peak' && track.toLowerCase() === 'boo-hoo') {
      queryTrack = 'Плак-плак';
    }
    const term = encodeURIComponent(`${artist} ${queryTrack}`);
    fetch(`https://itunes.apple.com/search?term=${term}&entity=song&limit=1`)
      .then(res => res.json())
      .then(data => {
        if (data.results && data.results.length > 0 && data.results[0].artworkUrl100) {
          const highResUrl = data.results[0].artworkUrl100.replace('100x100bb.jpg', '600x600bb.jpg');
          img.src = highResUrl;
        }
      })
      .catch(err => {
        console.log('Could not fetch album art for', track, err);
      });
  });

  const renderAbout = async () => {
    const mdContent = await localesFetcher.fetchMarkdown('karaoke', 'about.md');
    if (mdContent && window.marked) {
      let renderedHtml = window.marked.parse(mdContent);
      
      // Parse markdown alerts since browser-side marked.js doesn't natively support GFM alerts
      renderedHtml = renderedHtml.replace(/<blockquote>([\s\S]*?)<\/blockquote>/gi, (match, innerHtml) => {
        const alertMatch = innerHtml.match(/^\s*<p>\[!(NOTE|WARNING|INFO|TIP|CAUTION)\]/i);
        if (alertMatch) {
          const type = alertMatch[1].toLowerCase();
          const title = type.charAt(0).toUpperCase() + type.slice(1);
          let newContent = innerHtml.replace(/^\s*<p>\[!(NOTE|WARNING|INFO|TIP|CAUTION)\](?:\s*<br>\s*|<\/p>\s*<p>|\s+)/i, '<p>');
          if (!newContent.trim().startsWith('<p>')) newContent = '<p>' + newContent;
          return `<div class="markdown-alert markdown-alert-${type}">
            <div class="markdown-alert-title">${title}</div>
            ${newContent}
          </div>`;
        }
        return match;
      });

      mainView.innerHTML = `
        <div style="width: 100%; height: 100%; overflow-y: auto; overflow-x: hidden; background: #241f31;" class="custom-scrollbar">
          <div class="ubuntu-prose" style="padding: 20px;">
            ${renderedHtml}
          </div>
        </div>
      `;
    } else {
      const template = document.getElementById('about-karaoke-template');
      if (template) {
        mainView.innerHTML = `
          <div style="width: 100%; height: 100%; overflow-y: auto; overflow-x: hidden; background: #241f31;" class="custom-scrollbar">
            ${template.innerHTML}
          </div>
        `;
      } else {
        mainView.innerHTML = `
          <div style="color: white; height: 100%; display: flex; flex-direction: column; justify-content: center; padding: 20px;">
            <h2 style="font-size: 28px; margin-bottom: 15px;">${i18n.about_project}</h2>
            <p style="opacity: 0.8; line-height: 1.6;">${i18n.failed_load}</p>
          </div>
        `;
      }
    }
  };

  const getAuthToken = async () => {
    if (authManager.token) return authManager.token;
    const sessionStr = localStorage.getItem('sudothy_session');
    if (sessionStr) {
      try {
        const session = JSON.parse(sessionStr);
        if (session?.token) {
          authManager.token = session.token;
          authManager.user = session.user;
          authManager.state = AuthState.READY;
          return session.token;
        }
      } catch (e) {}
    }
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'guest' })
      });
      if (res.ok) {
        const data = await res.json();
        authManager.user = data.user;
        authManager.token = data.token;
        authManager.state = AuthState.READY;
        localStorage.setItem('sudothy_session', JSON.stringify({ user: data.user, token: data.token }));
        return data.token;
      }
    } catch (e) {}
    return null;
  };

  const renderPlayer = async (songIdentifier) => {
    const song = availableSongs.find(s => s.id === songIdentifier || s.videoFile === songIdentifier);
    if (!song) return;
    const songFile = song.videoFile;

    // Basic structure for video player, porting from production
    mainView.innerHTML = `
      <div class="karaoke-player-container" style="position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; overflow: hidden;">
        <div id="dynamic-backlight-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; opacity: 0.5;"></div>
        
        <div style="flex: 1; min-height: 0; position: relative; z-index: 2; display: flex; align-items: center; justify-content: center;">
          <video id="k-vid" crossorigin="anonymous" playsinline style="width: 100%; height: 100%; max-width: 100%; max-height: 100%; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); object-fit: contain;"></video>
        </div>
        
        <div id="k-lyrics" class="k-lyrics-container">
          <div id="k-line-top" class="k-line k-line-top"></div>
          <div id="k-line-bottom" class="k-line k-line-bottom"></div>
        </div>
        
        <div class="k-controls" style="flex-shrink: 0; height: 42px; margin-top: 8px; background: rgba(0,0,0,0.4); border-radius: 8px; z-index: 4; display: flex; align-items: center; padding: 0 14px; gap: 10px; border: 1px solid rgba(255,255,255,0.1);">
          <button id="k-play" style="background: none; border: none; color: white; cursor: pointer; display: flex; align-items: center; padding: 2px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </button>
          <div id="k-time" style="color: white; font-size: 11px; font-family: monospace; white-space: nowrap;">0:00 / 0:00</div>
          <input type="range" id="k-progress" value="0" min="0" max="100" style="flex: 1; height: 4px; cursor: pointer; accent-color: #E95420;">
          
          <div class="k-vol-group" style="display: flex; align-items: center; gap: 6px;">
            <button id="k-vol-btn" title="Mute/Unmute" style="background: none; border: none; color: white; cursor: pointer; display: flex; align-items: center; padding: 2px;">
              <svg id="k-vol-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            </button>
            <input type="range" id="k-volume" min="0" max="1" step="0.05" value="0.5" style="width: 55px; height: 4px; cursor: pointer; accent-color: #E95420;" />
          </div>

          <button id="btn-like" style="background: none; border: none; color: white; cursor: pointer; display: flex; align-items: center; gap: 4px; padding: 2px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
            <span id="like-count" style="font-size: 11px;">0</span>
          </button>
          <button id="btn-dislike" style="background: none; border: none; color: white; cursor: pointer; display: flex; align-items: center; gap: 4px; padding: 2px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2"></path></svg>
            <span id="dislike-count" style="font-size: 11px;">0</span>
          </button>
          <button id="btn-shuffle" style="background: none; border: none; color: white; cursor: pointer; display: flex; align-items: center; padding: 2px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
          </button>
        </div>
      </div>
    `;

    // Initialize Video Player JS
    const vid = mainView.querySelector('#k-vid');
    const lyricsContainer = mainView.querySelector('#k-lyrics');
    const lineTopEl = mainView.querySelector('#k-line-top');
    const lineBottomEl = mainView.querySelector('#k-line-bottom');
    const playBtn = mainView.querySelector('#k-play');
    const timeDisp = mainView.querySelector('#k-time');
    const progress = mainView.querySelector('#k-progress');
    const volBtn = mainView.querySelector('#k-vol-btn');
    const volInput = mainView.querySelector('#k-volume');
    const volIcon = mainView.querySelector('#k-vol-icon');
    const btnLike = mainView.querySelector('#btn-like');
    const btnDislike = mainView.querySelector('#btn-dislike');
    const btnShuffle = mainView.querySelector('#btn-shuffle');
    const likeCount = mainView.querySelector('#like-count');
    const dislikeCount = mainView.querySelector('#dislike-count');

    // Volume Control Logic
    let prevVolume = 0.5;
    const updateVolIcon = (vol, isMuted) => {
      if (isMuted || vol === 0) {
        volIcon.innerHTML = `
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        `;
      } else if (vol < 0.5) {
        volIcon.innerHTML = `
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        `;
      } else {
        volIcon.innerHTML = `
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        `;
      }
    };

    volInput.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      vid.volume = val;
      vid.muted = (val === 0);
      if (val > 0) prevVolume = val;
      updateVolIcon(val, vid.muted);
    });

    volBtn.addEventListener('click', () => {
      if (vid.muted || vid.volume === 0) {
        vid.muted = false;
        vid.volume = prevVolume || 0.5;
        volInput.value = vid.volume;
      } else {
        prevVolume = vid.volume;
        vid.muted = true;
        volInput.value = 0;
      }
      updateVolIcon(vid.volume, vid.muted);
    });

    // Voting Logic (Half-optimistic & per-user D1)
    let currentVote = null; // 'like' | 'dislike' | null
    let totalLikes = 0;
    let totalDislikes = 0;
    let isVoting = false;
    const currentSong = songFile;

    const updateButtonStyles = (vote) => {
      btnLike.style.color = vote === 'like' ? '#4CAF50' : 'white';
      btnDislike.style.color = vote === 'dislike' ? '#F44336' : 'white';
    };

    const updateCounts = (l, d) => {
      likeCount.textContent = typeof l === 'number' ? l : 0;
      dislikeCount.textContent = typeof d === 'number' ? d : 0;
    };

    getAuthToken().then(token => {
      if (currentSong !== songFile) return;
      const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
      fetch(`/api/vote?file_name=${encodeURIComponent(songFile)}`, { headers })
        .then(res => res.json())
        .then(data => {
          if (currentSong !== songFile) return;
          if (data.liked) currentVote = 'like';
          else if (data.disliked || data.desliked) currentVote = 'dislike';
          else currentVote = null;

          if (typeof data.totalLikes === 'number') totalLikes = data.totalLikes;
          if (typeof data.totalDislikes === 'number') totalDislikes = data.totalDislikes;

          updateButtonStyles(currentVote);
          updateCounts(totalLikes, totalDislikes);
        })
        .catch(e => console.error(e));
    });

    const castVote = async (action) => {
      if (isVoting) return;

      const prevVote = currentVote;
      const nextVote = currentVote === action ? null : action;

      // Half-optimistic: update button highlight immediately before network round-trip
      currentVote = nextVote;
      updateButtonStyles(currentVote);
      isVoting = true;

      try {
        const token = await getAuthToken();
        const headers = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = `Bearer ${token}`;

        const res = await fetch('/api/vote', {
          method: 'POST',
          headers,
          body: JSON.stringify({ file_name: songFile, action })
        });

        if (!res.ok) {
          throw new Error(`Vote request failed with status ${res.status}`);
        }

        const data = await res.json();
        if (currentSong !== songFile) return;

        if (data.liked) currentVote = 'like';
        else if (data.disliked || data.desliked) currentVote = 'dislike';
        else currentVote = null;

        if (typeof data.totalLikes === 'number') totalLikes = data.totalLikes;
        if (typeof data.totalDislikes === 'number') totalDislikes = data.totalDislikes;

        updateButtonStyles(currentVote);
        updateCounts(totalLikes, totalDislikes);
      } catch (e) {
        console.error('Vote failed:', e);
        if (currentSong === songFile) {
          // Revert button styles on error
          currentVote = prevVote;
          updateButtonStyles(currentVote);
          updateCounts(totalLikes, totalDislikes);
        }
      } finally {
        isVoting = false;
      }
    };

    btnLike.addEventListener('click', () => castVote('like'));
    btnDislike.addEventListener('click', () => castVote('dislike'));

    btnShuffle.addEventListener('click', () => {
      const remaining = availableSongs.filter(s => s.id !== song.id);
      if(remaining.length > 0) {
        const next = remaining[Math.floor(Math.random() * remaining.length)];
        songItems.forEach(t => t.style.background = t.dataset.song === next.id ? 'rgba(255,255,255,0.1)' : 'transparent');
        renderPlayer(next.id);
      }
    });

    // Audio & Lyrics sync logic
    const songData = await loadLyrics(song.id);
    const lyricsData = songData?.lyricsData;
    
    vid.src = song.videoUrl;
    vid.volume = 0.5;
    vid.load();
    vid.play().catch(e => console.warn('Autoplay prevented', e));

    const renderVerseWordsHTML = (verse, lineKey) => {
      if (!verse) return '';
      const wordsHTML = verse.words.map((w, wIdx) => {
        const isJp = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/.test(w.word);
        const margin = isJp ? "0" : "0 2px";
        const display = w.furigana ? `<span class="yomitan-ruby" data-furi="${w.furigana}">${w.word}</span>` : w.word;
        return `<span class="word-wrapper" id="w-${lineKey}-${wIdx}" style="margin: ${margin};">
          <span class="word-base">${display}</span>
          <span class="word-highlight" aria-hidden="true">${display}</span>
        </span>`;
      }).join('');

      const translationHTML = verse.translation
        ? `<span class="k-line-translation">${verse.translation}</span>`
        : '';

      return wordsHTML + translationHTML;
    };

    let currentTopVerseIndex = -2;
    let currentBottomVerseIndex = -2;
    let cachedTopWords = [];
    let cachedBottomWords = [];
    let animationFrameId = null;

    const updateLyrics = () => {
      const time = vid.currentTime;
      let activeV = -1;
      let upcomingV = -1;

      if (lyricsData && lyricsData.length > 0) {
        for (let i = 0; i < lyricsData.length; i++) {
          const v = lyricsData[i];
          if (time >= v.verseStart && time <= v.verseEnd) {
            activeV = i;
            break;
          }
          if (time < v.verseStart) {
            upcomingV = i;
            break;
          }
        }
      }

      // Determine which verses should occupy Top and Bottom lines
      const focusV = activeV !== -1 ? activeV : upcomingV;
      let targetTop = -1;
      let targetBottom = -1;

      if (focusV !== -1 && lyricsData) {
        if (focusV % 2 === 0) {
          // Even verse on Top line
          targetTop = focusV;
          targetBottom = focusV + 1 < lyricsData.length ? focusV + 1 : -1;
        } else {
          // Odd verse on Bottom line; Top line immediately switches to next upcoming text!
          targetBottom = focusV;
          targetTop = focusV + 1 < lyricsData.length ? focusV + 1 : -1;
        }
      }

      // Mount or update Top line DOM only when verse changes
      if (targetTop !== currentTopVerseIndex) {
        currentTopVerseIndex = targetTop;
        if (targetTop !== -1 && lyricsData && lyricsData[targetTop]) {
          lineTopEl.innerHTML = renderVerseWordsHTML(lyricsData[targetTop], 'top');
          cachedTopWords = Array.from(lineTopEl.querySelectorAll('.word-wrapper'));
        } else {
          lineTopEl.innerHTML = '';
          cachedTopWords = [];
        }
      }

      // Mount or update Bottom line DOM only when verse changes
      if (targetBottom !== currentBottomVerseIndex) {
        currentBottomVerseIndex = targetBottom;
        if (targetBottom !== -1 && lyricsData && lyricsData[targetBottom]) {
          lineBottomEl.innerHTML = renderVerseWordsHTML(lyricsData[targetBottom], 'bot');
          cachedBottomWords = Array.from(lineBottomEl.querySelectorAll('.word-wrapper'));
        } else {
          lineBottomEl.innerHTML = '';
          cachedBottomWords = [];
        }
      }

      // Update appearance and smooth wipe progress on both lines
      if (targetTop !== -1 || targetBottom !== -1) {
        lyricsContainer.style.opacity = '1';

        // Top line wipe update
        if (targetTop !== -1 && lyricsData && lyricsData[targetTop]) {
          const isTopActive = targetTop === activeV;
          lineTopEl.classList.toggle('k-line-active', isTopActive);
          lineTopEl.classList.toggle('k-line-idle', !isTopActive);

          const vTop = lyricsData[targetTop];
          for (let j = 0; j < vTop.words.length; j++) {
            const w = vTop.words[j];
            const el = cachedTopWords[j];
            if (!el) continue;

            let progress = 0;
            if (isTopActive) {
              if (time >= w.end) {
                progress = 100;
              } else if (time > w.start && w.end > w.start) {
                progress = Math.min(100, Math.max(0, ((time - w.start) / (w.end - w.start)) * 100));
              }
            }
            el.style.setProperty('--wipe-progress', `${progress}%`);
          }
        }

        // Bottom line wipe update
        if (targetBottom !== -1 && lyricsData && lyricsData[targetBottom]) {
          const isBottomActive = targetBottom === activeV;
          lineBottomEl.classList.toggle('k-line-active', isBottomActive);
          lineBottomEl.classList.toggle('k-line-idle', !isBottomActive);

          const vBot = lyricsData[targetBottom];
          for (let j = 0; j < vBot.words.length; j++) {
            const w = vBot.words[j];
            const el = cachedBottomWords[j];
            if (!el) continue;

            let progress = 0;
            if (isBottomActive) {
              if (time >= w.end) {
                progress = 100;
              } else if (time > w.start && w.end > w.start) {
                progress = Math.min(100, Math.max(0, ((time - w.start) / (w.end - w.start)) * 100));
              }
            }
            el.style.setProperty('--wipe-progress', `${progress}%`);
          }
        }
      } else {
        lyricsContainer.style.opacity = '0';
      }

      animationFrameId = requestAnimationFrame(updateLyrics);
    };

    animationFrameId = requestAnimationFrame(updateLyrics);

    const togglePlay = () => vid.paused ? vid.play() : vid.pause();
    playBtn.addEventListener('click', togglePlay);
    vid.addEventListener('click', togglePlay);

    vid.addEventListener('play', () => playBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>');
    vid.addEventListener('pause', () => playBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>');

    const formatTime = (time) => {
      if (isNaN(time)) return "0:00";
      const m = Math.floor(time / 60);
      const s = Math.floor(time % 60);
      return `${m}:${s.toString().padStart(2, '0')}`;
    };

    let isDragging = false;
    vid.addEventListener('timeupdate', () => {
      timeDisp.textContent = `${formatTime(vid.currentTime)} / ${formatTime(vid.duration)}`;
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
    container.innerHTML = `
      <div class="bl-layer bl-1" style="position:absolute; top:-10px; left:-10px; right:-10px; bottom:-10px; filter:blur(20px); opacity:0.8; transition: background 0.3s;"></div>
      <div class="bl-layer bl-2" style="position:absolute; top:-20px; left:-20px; right:-20px; bottom:-20px; filter:blur(40px); opacity:0.6; transition: background 0.3s;"></div>
    `;
    const bl1 = container.querySelector('.bl-1');
    const bl2 = container.querySelector('.bl-2');

    let backlightFrame = null;
    let tickCount = 0;
    const updateBacklight = () => {
      if (vidEl.paused || vidEl.ended) {
        backlightFrame = requestAnimationFrame(updateBacklight);
        return;
      }
      
      tickCount++;
      if (tickCount % 2 !== 0) {
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
        
        bl1.style.background = `rgba(${r},${g},${b}, 0.5)`;
        bl2.style.background = `rgba(${r},${g},${b}, 0.3)`;
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

  // Listen for language changes to dynamically update the about section if it's active
  const langListener = () => {
    // Only re-render if the user is currently looking at the about section
    const activeTab = Array.from(songItems).find(t => t.style.background === 'rgba(255, 255, 255, 0.1)' || t.style.background === 'rgba(255,255,255,0.1)');
    if (activeTab && activeTab.dataset.song === 'about') {
      renderAbout();
    }
  };
  window.addEventListener('languageChanged', langListener);
  
  // Cleanup listener on window close
  const currentClose = win.querySelector('.gnome-close').onclick;
  win.querySelector('.gnome-close').addEventListener('click', () => {
    window.removeEventListener('languageChanged', langListener);
  });
};
