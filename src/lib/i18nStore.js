class I18nStore {
  constructor() {
    this.listeners = new Set();
    this.lang = 'en-GB';
    
    // Initialize from localStorage if available
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sudothy_lang');
      if (saved) {
        this.lang = saved;
      }
    }
  }

  getLang() {
    return this.lang;
  }

  setLang(newLang, persist = false) {
    if (this.lang !== newLang) {
      this.lang = newLang;
      if (persist && typeof window !== 'undefined') {
        localStorage.setItem('sudothy_lang', newLang);
      }
      this.notify();
    }
  }

  setTemporaryLang(newLang, minutes = 25) {
    this.lang = newLang;
    if (typeof window !== 'undefined') {
      localStorage.setItem('sudothy_lang', newLang);
      setTimeout(() => {
        if (localStorage.getItem('sudothy_lang') === newLang) {
          localStorage.removeItem('sudothy_lang');
        }
      }, minutes * 60 * 1000);
    }
    this.notify();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(listener => listener(this.lang));
  }
}

export const i18nStore = new I18nStore();
export const supportedLocales = ['en-GB', 'nl-BE', 'fr-BE', 'pt-BR', 'es-AR', 'sv-SE', 'ja-JP', 'en-US', 'de-DE', 'zh-CN'];
