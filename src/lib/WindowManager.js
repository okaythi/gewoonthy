class WindowManager {
  constructor() {
    this.windows = [];
    this.container = document.body;
    this.zIndexCounter = 100;
  }

  bringToFront(win) {
    this.zIndexCounter++;
    win.style.zIndex = this.zIndexCounter;
  }

  createWindow(title, contentHTML) {
    const win = document.createElement('div');
    win.className = 'gnome-window';
    
    const header = document.createElement('div');
    header.className = 'gnome-header';
    
    const titleEl = document.createElement('div');
    titleEl.className = 'gnome-title';
    titleEl.textContent = title;
    
    const closeBtn = document.createElement('div');
    closeBtn.className = 'gnome-close';
    closeBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="2" y1="2" x2="10" y2="10" /><line x1="10" y1="2" x2="2" y2="10" /></svg>`;
    
    header.appendChild(titleEl);
    header.appendChild(closeBtn);
    
    const content = document.createElement('div');
    content.className = 'gnome-content';
    content.innerHTML = contentHTML;
    
    win.appendChild(header);
    win.appendChild(content);
    
    // Initial z-index
    this.bringToFront(win);
    win.addEventListener('mousedown', () => this.bringToFront(win), { capture: true });
    
    this.setupDrag(win, header);
    
    closeBtn.addEventListener('click', () => {
      win.remove();
      this.windows = this.windows.filter(w => w !== win);
    });
    
    this.container.appendChild(win);
    this.windows.push(win);
    return win;
  }

  setupDrag(win, handle) {
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    const onMouseDown = (e) => {
      if (e.target.classList.contains('gnome-close')) return;
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      
      // Convert transform-based positioning to absolute left/top if needed
      const rect = win.getBoundingClientRect();
      // rect.left and rect.top are the top-left of the window
      win.style.transform = 'none';
      win.style.left = rect.left + 'px';
      win.style.top = rect.top + 'px';
      
      initialLeft = rect.left;
      initialTop = rect.top;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      
      let newLeft = initialLeft + dx;
      let newTop = initialTop + dy;
      
      // Clamp boundaries so the header is always accessible
      // Assuming header is ~46px tall and we need at least 30px of it visible horizontally
      const maxLeft = window.innerWidth - 30;
      const minLeft = -win.offsetWidth + 30;
      const maxTop = window.innerHeight - 30;
      const minTop = 0; // Header cannot go above top of screen
      
      newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
      newTop = Math.max(minTop, Math.min(newTop, maxTop));
      
      win.style.left = newLeft + 'px';
      win.style.top = newTop + 'px';
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    handle.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
}

export const windowManager = new WindowManager();
