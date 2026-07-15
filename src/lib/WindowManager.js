class WindowManager {
  constructor() {
    this.windows = [];
    this.container = document.body;
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
    closeBtn.textContent = '×';
    
    header.appendChild(titleEl);
    header.appendChild(closeBtn);
    
    const content = document.createElement('div');
    content.className = 'gnome-content';
    content.innerHTML = contentHTML;
    
    win.appendChild(header);
    win.appendChild(content);
    
    this.setupDrag(win, header);
    
    closeBtn.addEventListener('click', () => {
      win.remove();
      this.windows = this.windows.filter(w => w !== win);
    });
    
    this.container.appendChild(win);
    this.windows.push(win);
  }

  setupDrag(win, handle) {
    let isDragging = false;
    let startX, startY, initialX, initialY;

    const onMouseDown = (e) => {
      if (e.target.classList.contains('gnome-close')) return;
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      const rect = win.getBoundingClientRect();
      initialX = rect.left + rect.width / 2;
      initialY = rect.top + rect.height / 2;
      win.style.transform = `translate(-50%, -50%) translate(${initialX - (window.innerWidth/2)}px, ${initialY - (window.innerHeight/2)}px)`;
      win.style.left = '50%';
      win.style.top = '50%';
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      win.style.transform = `translate(-50%, -50%) translate(${initialX - (window.innerWidth/2) + dx}px, ${initialY - (window.innerHeight/2) + dy}px)`;
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
