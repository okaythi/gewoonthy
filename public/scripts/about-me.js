document.addEventListener('astro:page-load', async () => {
  if (window.location.pathname !== '/' && window.location.pathname !== '') return;
  const root = document.getElementById('blocks-root');
  if (!root) return;

  let blocks = null;
  let profBlocks = null;

  try {
    if (window.__PRELOADED_ABOUT_DATA__) {
       blocks = window.__PRELOADED_ABOUT_DATA__;
    } else {
       const res = await fetch('/api/about', { credentials: 'same-origin' });
       blocks = await res.json();
    }
    
    if (!blocks || blocks.length === 0) {
      root.innerHTML = '<div class="empty-state">Nothing to see here yet... Do I even exist?</div>';
      return;
    }

    root.innerHTML = '';
    const fragment = document.createDocumentFragment();

    // Group by category
    const groups = {};
    let statusText = null;
    let cropCoords = null;
    blocks.forEach(b => {
       if (b.type === 'status' || b.id === 0) {
          statusText = b.content;
       } else if (b.type === 'pfp_crop' || b.id === -1) {
          try { cropCoords = JSON.parse(b.content); } catch(e) {}
       } else if (b.type === 'field') {
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
    root.innerHTML = '<div class="empty-state">Nothing to see here yet... Do I even exist?</div>';
  }

  // PFP Fallback
  const pfp = document.getElementById('about-pfp');
  if (pfp) {
     pfp.addEventListener('error', () => {
        pfp.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23888"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
     });
  }

  // Academics Link Injection
  try {
    if (window.__PRELOADED_PROF_DATA__) {
       profBlocks = window.__PRELOADED_PROF_DATA__;
    } else {
       const profRes = await fetch('/api/professional', { credentials: 'same-origin' });
       profBlocks = await profRes.json();
    }
    
    // Render academics button if there are professional blocks
    if (profBlocks && profBlocks.length > 0) {
      const linkContainer = document.getElementById('academics-link-container');
      if (linkContainer) {
        linkContainer.innerHTML = `
          <a href="/professional" class="block visible" style="display: inline-flex; align-items: center; gap: 0.5rem; background: var(--glass-bg); border: 1px solid var(--border); padding: 0.6rem 1.2rem; border-radius: 30px; color: var(--fg); text-decoration: none; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; transition: all 0.2s ease;">
            Academics <svg viewBox="0 0 24 24" style="width: 14px; height: 14px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round;"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        `;
        // add hover effect via JS since it's injected
        const link = linkContainer.querySelector('a');
        link.addEventListener('mouseenter', () => { link.style.background = 'var(--glass-hover)'; link.style.borderColor = 'rgba(255,255,255,0.15)'; });
        link.addEventListener('mouseleave', () => { link.style.background = 'var(--glass-bg)'; link.style.borderColor = 'var(--border)'; });
      }
    }
  } catch(e) {}
});
