if (!window.readScriptLoaded) {
  window.readScriptLoaded = true;

  (function() {
    let lastInitUrl = '';
    let currentQuoteData = null;
    let storageAllowed = false;

    function setupReadPage() {
      const currentUrl = window.location.href;
      if (lastInitUrl === currentUrl) return;
      lastInitUrl = currentUrl;

      const langPicker = document.getElementById('lang-picker');
      if (!langPicker) return; 

      if (!window.readPageListenersAttached) {
        document.addEventListener('contextmenu', e => { if (!e.target.closest('#quote-text')) { e.preventDefault(); } });
        document.addEventListener('copy', e => { const selection = window.getSelection(); if (!e.target.closest('#quote-text') && (!selection.anchorNode || !selection.anchorNode.parentElement.closest('#quote-text'))) { e.preventDefault(); return false; } });
        document.addEventListener('keydown', e => { if (e.key === 'F12') e.preventDefault(); if (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) e.preventDefault(); if (e.ctrlKey && ['U', 'u'].includes(e.key)) e.preventDefault(); });
        window.readPageListenersAttached = true;
      }

      const euCountries = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'NO', 'IS', 'LI', 'CH'];
      const textEl = document.getElementById('quote-text');
      const authorEl = document.getElementById('quote-author');
      const sourceEl = document.getElementById('quote-source');
      const quoteBox = document.getElementById('quote-box');
      const savedLang = localStorage.getItem('pref_lang') || 'en';
      langPicker.value = savedLang;

      langPicker.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        localStorage.setItem('pref_lang', selectedLang);
        if (currentQuoteData && currentQuoteData.text[selectedLang]) {
          textEl.style.opacity = 0; 
          setTimeout(() => { textEl.textContent = `"${currentQuoteData.text[selectedLang]}"`; textEl.style.opacity = 1; }, 200);
        }
      });

      async function init() {
        const consent = localStorage.getItem('eu_consent');
        if (consent === 'accepted') { storageAllowed = true; fetchQuote(); return; } 
        else if (consent === 'declined') { storageAllowed = false; fetchQuote(); return; }
        try {
          const traceRes = await fetch('/cdn-cgi/trace');
          const traceText = await traceRes.text();
          const locMatch = traceText.match(/loc=([A-Z]{2})/);
          const country = locMatch ? locMatch[1] : null;
          if (country && euCountries.includes(country)) { showToast(); } 
          else { storageAllowed = true; fetchQuote(); }
        } catch (e) { showToast(); }
      }

      function showToast() {
        const toast = document.getElementById('consent-toast');
        toast.classList.add('visible');
        fetchQuote(); 
        document.getElementById('consent-accept').addEventListener('click', () => {
          localStorage.setItem('eu_consent', 'accepted'); storageAllowed = true; toast.classList.remove('visible');
          if (currentQuoteData) saveQuoteToStorage(currentQuoteData.id);
        });
        document.getElementById('consent-decline').addEventListener('click', () => {
          localStorage.setItem('eu_consent', 'declined'); storageAllowed = false; toast.classList.remove('visible');
        });
      }

      async function fetchQuote() {
        let seenQuotes = [];
        if (storageAllowed || localStorage.getItem('eu_consent') === 'accepted') {
          try { const stored = localStorage.getItem('seenQuotes'); if (stored) seenQuotes = JSON.parse(stored); } catch(e) {}
        }
        try {
          const res = await fetch(`/api/quote?seen=${seenQuotes.join(',')}`);
          currentQuoteData = await res.json();
          const activeLang = langPicker.value;
          textEl.style.transition = 'opacity 0.2s ease';
          textEl.textContent = `"${currentQuoteData.text[activeLang] || currentQuoteData.text['en']}"`;
          authorEl.textContent = `— ${currentQuoteData.author}`;
          sourceEl.textContent = currentQuoteData.source;
          quoteBox.classList.add('visible');
          if (storageAllowed) saveQuoteToStorage(currentQuoteData.id);
        } catch (error) {
          textEl.textContent = "A system error occurred. Please check back later.";
          authorEl.textContent = ""; sourceEl.textContent = ""; quoteBox.classList.add('visible');
        }
      }

      function saveQuoteToStorage(id) {
        let seenQuotes = [];
        try { const stored = localStorage.getItem('seenQuotes'); if (stored) seenQuotes = JSON.parse(stored); } catch(e) {}
        if (!seenQuotes.includes(parseInt(id))) {
          seenQuotes.push(parseInt(id));
          if (seenQuotes.length > 200) seenQuotes = []; 
          localStorage.setItem('seenQuotes', JSON.stringify(seenQuotes));
        }
      }

      init();
    }

    setupReadPage();
    document.addEventListener('astro:page-load', setupReadPage);
  })();
}
