  if (!window.globalSecurityAttached) {
    document.addEventListener('contextmenu', event => { 
      if (!event.target.closest('#quote-text') && !event.target.closest('.allow-select')) {
        event.preventDefault(); 
      }
    });
    
    document.addEventListener('copy', event => { 
      const selection = window.getSelection(); 
      if (!event.target.closest('#quote-text') && !event.target.closest('.allow-select')) {
        if (!selection.anchorNode || (!selection.anchorNode.parentElement?.closest('#quote-text') && !selection.anchorNode.parentElement?.closest('.allow-select'))) {
          event.preventDefault(); 
          return false; 
        }
      }
    });
    
    document.addEventListener('keydown', event => { 
      if (event.key === 'F12') {
        event.preventDefault(); 
      }
      if (event.ctrlKey && event.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(event.key)) {
        event.preventDefault(); 
      }
      if (event.ctrlKey && ['U', 'u'].includes(event.key)) {
        event.preventDefault(); 
      }
    });
    window.globalSecurityAttached = true;
  }
