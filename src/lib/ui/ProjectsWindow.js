import { windowManager } from '../WindowManager.js';
// We'll import openKaraokeWindow later when we build Phase 4
// import { openKaraokeWindow } from './KaraokeWindow.js';

export const openProjectsWindow = () => {
  const contentHTML = `
    <div class="projects-layout" style="display: flex; width: 100%; height: 100%;">
      <div class="projects-sidebar" style="width: 240px; border-right: 1px solid rgba(255,255,255,0.1); padding: 12px; display: flex; flex-direction: column; gap: 4px;">
        <div class="proj-tab active" data-category="Recent" style="padding: 10px 14px; background: rgba(255,255,255,0.1); border-radius: 6px; cursor: pointer; transition: background 0.15s; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.03); display: flex; align-items: center; gap: 10px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          Recent
        </div>
        <div class="proj-tab" data-category="Starred" style="padding: 10px 14px; background: transparent; border-radius: 6px; cursor: pointer; transition: background 0.15s; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.03); display: flex; align-items: center; gap: 10px;" onmouseover="if(this.style.background === 'transparent') this.style.background='rgba(255,255,255,0.05)';" onmouseout="if(this.style.background === 'rgba(255, 255, 255, 0.05)') this.style.background='transparent';">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          Starred
        </div>
        <div class="proj-tab" data-category="Coding" style="padding: 10px 14px; background: transparent; border-radius: 6px; cursor: pointer; transition: background 0.15s; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.03); display: flex; align-items: center; gap: 10px;" onmouseover="if(this.style.background === 'transparent') this.style.background='rgba(255,255,255,0.05)';" onmouseout="if(this.style.background === 'rgba(255, 255, 255, 0.05)') this.style.background='transparent';">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          Coding
        </div>
        <div class="proj-tab" data-category="Music" style="padding: 10px 14px; background: transparent; border-radius: 6px; cursor: pointer; transition: background 0.15s; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.03); display: flex; align-items: center; gap: 10px;" onmouseover="if(this.style.background === 'transparent') this.style.background='rgba(255,255,255,0.05)';" onmouseout="if(this.style.background === 'rgba(255, 255, 255, 0.05)') this.style.background='transparent';">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
          Music
        </div>
        <div class="proj-tab" data-category="Professional" style="padding: 10px 14px; background: transparent; border-radius: 6px; cursor: pointer; transition: background 0.15s; font-size: 14px; display: flex; align-items: center; gap: 10px;" onmouseover="if(this.style.background === 'transparent') this.style.background='rgba(255,255,255,0.05)';" onmouseout="if(this.style.background === 'rgba(255, 255, 255, 0.05)') this.style.background='transparent';">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          Professional
        </div>
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
