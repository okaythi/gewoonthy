import { windowManager } from '../WindowManager.js';
// We'll import openKaraokeWindow later when we build Phase 4
// import { openKaraokeWindow } from './KaraokeWindow.js';

export const openProjectsWindow = () => {
  const contentHTML = `
    <div class="projects-layout" style="display: flex; width: 900px; height: 600px; max-width: 90vw; max-height: 90vh;">
      <div class="projects-sidebar" style="width: 200px; border-right: 1px solid rgba(255,255,255,0.1); padding: 10px; display: flex; flex-direction: column; gap: 5px;">
        <button class="proj-tab active" data-category="Recent" style="text-align: left; padding: 8px; background: rgba(255,255,255,0.1); border: none; color: white; border-radius: 4px; cursor: pointer;">Recent</button>
        <button class="proj-tab" data-category="Starred" style="text-align: left; padding: 8px; background: transparent; border: none; color: white; border-radius: 4px; cursor: pointer;">Starred</button>
        <button class="proj-tab" data-category="Coding" style="text-align: left; padding: 8px; background: transparent; border: none; color: white; border-radius: 4px; cursor: pointer;">Coding</button>
        <button class="proj-tab" data-category="Music" style="text-align: left; padding: 8px; background: transparent; border: none; color: white; border-radius: 4px; cursor: pointer;">Music</button>
        <button class="proj-tab" data-category="Professional" style="text-align: left; padding: 8px; background: transparent; border: none; color: white; border-radius: 4px; cursor: pointer;">Professional</button>
      </div>
      <div class="projects-main" style="flex: 1; padding: 20px; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; overflow-y: auto;">
        <!-- Dynamic content will go here -->
      </div>
    </div>
  `;

  const win = windowManager.createWindow('Projects', contentHTML);
  const mainView = win.querySelector('.projects-main');
  const tabs = win.querySelectorAll('.proj-tab');

  const emptyStateChoose = `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%; height:100%; opacity:0.5;">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <p style="margin-top: 10px;">Choose an option on the menu to see it here.</p>
    </div>
  `;

  const emptyStateNothing = `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%; height:100%; opacity:0.5;">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      </svg>
      <p style="margin-top: 10px;">Nothing to show here yet.</p>
    </div>
  `;

  const renderCategory = (cat) => {
    tabs.forEach(t => {
      t.style.background = t.dataset.category === cat ? 'rgba(255,255,255,0.1)' : 'transparent';
    });

    if (cat === 'Coding') {
      mainView.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 15px; width: 100%; align-items: start;">
          <div class="proj-card karaoke-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 15px; border-radius: 8px; cursor: pointer; text-align: center; border: 1px solid transparent; transition: background 0.2s, border 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.05)'; this.style.border='1px solid rgba(255,255,255,0.1)';" onmouseout="this.style.background='transparent'; this.style.border='1px solid transparent';">
            <div style="font-size: 48px; margin-bottom: 10px; line-height: 1;">🎤</div>
            <div style="font-size: 14px; color: white;">Karaoke</div>
          </div>
        </div>
      `;
      const karaokeBtn = mainView.querySelector('.karaoke-card');
      karaokeBtn.addEventListener('click', () => {
        // Log to recent projects (using numeric ID 1 for Karaoke)
        fetch('/api/projects/recent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ project_id: 1, category: 'Coding' })
        }).catch(e => console.error(e));

        // Open Karaoke window
        import('./KaraokeWindow.js').then(module => {
           module.openKaraokeWindow();
        });
      });
    } else if (cat === 'Recent') {
      // Fetch recents
      mainView.innerHTML = `<div style="opacity: 0.5;">Loading...</div>`;
      fetch('/api/projects/recent')
        .then(res => res.json())
        .then(data => {
          if (data && data.projects && data.projects.length > 0) {
             let html = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 15px; width: 100%; align-items: start;">';
             data.projects.forEach(p => {
                if (p.project_id === 1) { // Karaoke
                  html += `
                    <div class="proj-card karaoke-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 15px; border-radius: 8px; cursor: pointer; text-align: center; border: 1px solid transparent; transition: background 0.2s, border 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.05)'; this.style.border='1px solid rgba(255,255,255,0.1)';" onmouseout="this.style.background='transparent'; this.style.border='1px solid transparent';">
                      <div style="font-size: 48px; margin-bottom: 10px; line-height: 1;">🎤</div>
                      <div style="font-size: 14px; color: white;">Karaoke</div>
                    </div>
                  `;
                }
             });
             html += '</div>';
             mainView.innerHTML = html;

             const karaokeBtn = mainView.querySelector('.karaoke-card');
             if (karaokeBtn) {
               karaokeBtn.addEventListener('click', () => {
                 fetch('/api/projects/recent', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ project_id: 1, category: 'Coding' })
                 }).catch(e => console.error(e));
                 import('./KaraokeWindow.js').then(module => {
                    module.openKaraokeWindow();
                 });
               });
             }
          } else {
             mainView.innerHTML = emptyStateNothing;
          }
        })
        .catch(err => {
          mainView.innerHTML = emptyStateNothing;
        });
    } else {
      mainView.innerHTML = emptyStateNothing;
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      renderCategory(tab.dataset.category);
    });
  });

  // Default to nothing clicked
  mainView.innerHTML = emptyStateChoose;
  tabs.forEach(t => t.style.background = 'transparent');
};
