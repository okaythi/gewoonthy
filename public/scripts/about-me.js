document.addEventListener('astro:page-load', async () => {
  const root = document.getElementById('blocks-root');
  if (!root) return;

  try {
    const res = await fetch('/api/about', { credentials: 'same-origin' });
    const blocks = await res.json();
    
    if (!blocks || blocks.length === 0) {
      root.innerHTML = '<div class="empty-state">Nothing to see here yet... Do I even exist?</div>';
      return;
    }

    root.innerHTML = '';
    const fragment = document.createDocumentFragment();

    // Group by category
    const groups = {};
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
       const groupEl = document.createElement('div');
       groupEl.className = 'block';
       
       let html = `<div class="category-title">${category}</div>`;
       html += `<div class="fields-grid">`;
       fields.forEach(f => {
          const isBio = f.label.toLowerCase().includes('bio') || (f.value && f.value.length > 100);
          const cardClass = isBio ? 'field-card is-bio' : 'field-card';
          html += `
             <div class="${cardClass}">
               <div class="field-label">${f.label}</div>
               <div class="field-value">${f.value || ''}</div>
             </div>
          `;
       });
       html += `</div>`;
       groupEl.innerHTML = html;
       fragment.appendChild(groupEl);
    }
    
    root.appendChild(fragment);

    // Intersection Observer for scroll virtualization & fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { rootMargin: '50px 0px', threshold: 0.1 });

    document.querySelectorAll('.block').forEach(el => observer.observe(el));

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
});
