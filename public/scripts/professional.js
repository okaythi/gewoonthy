document.addEventListener('astro:page-load', async () => {
  if (window.location.pathname !== '/professional' && window.location.pathname !== '/professional/') return;
  const root = document.getElementById('blocks-root');
  if (!root) return;

  try {
    let blocks = null;
    const profScript = document.getElementById('preloaded-prof-data');
    if (profScript) {
       blocks = JSON.parse(profScript.textContent);
    } else {
       const res = await fetch('/api/professional', { credentials: 'same-origin' });
       blocks = await res.json();
    }
    
    if (!blocks || blocks.length === 0) {
      document.querySelector('.content-wrapper').innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 60vh; text-align: center;">
          <h1 style="font-size: 4rem; margin: 0; color: var(--fg); letter-spacing: -2px;">404</h1>
          <p style="color: var(--accent); margin-top: 1rem; font-size: 1rem;">This profile hasn't been set up yet.</p>
          <a href="/" style="margin-top: 2rem; color: var(--fg); text-decoration: none; border-bottom: 1px solid var(--border); padding-bottom: 0.2rem; transition: border-color 0.2s ease;">Return home</a>
        </div>
      `;
      return;
    }

    root.innerHTML = '';
    const fragment = document.createDocumentFragment();

    // Group by category
    const groups = {};
    let statusText = null;
    let cropCoords = null;
    
    let aboutBlocks = [];
    const aboutScript = document.getElementById('preloaded-prof-about-data');
    if (aboutScript) {
       aboutBlocks = JSON.parse(aboutScript.textContent);
    }
    aboutBlocks.forEach(b => {
       if (b.type === 'status' || b.id === 0) {
          statusText = b.content;
       } else if (b.type === 'pfp_crop' || b.id === -1) {
          try { cropCoords = JSON.parse(b.content); } catch(e) {}
       }
    });

    blocks.forEach(b => {
       if (b.type === 'field') {
          try {
             const c = JSON.parse(b.content);
             if (c.category) {
                if(!groups[c.category]) groups[c.category] = [];
                groups[c.category].push(c);
             }
          } catch(e) {}
       }
    });

    for (const [category, fields] of Object.entries(groups)) {
       const validFields = fields.filter(f => f.value && f.value.trim() !== '');
       if (validFields.length === 0) continue;

       const groupEl = document.createElement('div');
       groupEl.className = 'block';
       
       let html = `<div class="category-title">${category}</div>`;
       html += `<div class="fields-grid">`;
       validFields.forEach(f => {
          const isBio = f.label.toLowerCase().includes('bio') || (f.value && f.value.length > 100);
          const cardClass = isBio ? 'field-card is-bio' : 'field-card';
          html += `
             <div class="${cardClass}">
               <div class="field-label">${f.label}</div>
               <div class="field-value">${f.value}</div>
             </div>
          `;
       });
       html += `</div>`;
       groupEl.innerHTML = html;
       fragment.appendChild(groupEl);
    }
    
    root.appendChild(fragment);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { rootMargin: '50px 0px', threshold: 0.1 });

    document.querySelectorAll('.block').forEach(el => observer.observe(el));

    // Apply status bubble
    if (statusText) {
       const bubble = document.getElementById('about-status-bubble');
       const textEl = document.getElementById('about-status-text');
       if (bubble && textEl) {
          textEl.textContent = statusText;
          bubble.style.display = 'block';
       }
    }
    
    // Apply crop coordinates
    if (cropCoords) {
       const pfpImg = document.getElementById('about-pfp');
       if (pfpImg) {
          pfpImg.style.position = 'absolute';
          pfpImg.style.left = cropCoords.x + '%';
          pfpImg.style.top = cropCoords.y + '%';
          pfpImg.style.width = cropCoords.w + '%';
          pfpImg.style.height = cropCoords.h + '%';
          pfpImg.style.maxWidth = 'none';
          pfpImg.style.objectFit = 'fill';
          pfpImg.style.imageRendering = 'high-quality';
          pfpImg.style.transform = 'translateZ(0)';
          pfpImg.style.willChange = 'transform';
       }
    }

  } catch(e) {
    root.innerHTML = '<div class="empty-state">Nothing to see here yet...</div>';
  }

  // PFP Fallback
  const pfp = document.getElementById('about-pfp');
  if (pfp) {
     pfp.addEventListener('error', () => {
        pfp.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23888"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
     });
  }
});
