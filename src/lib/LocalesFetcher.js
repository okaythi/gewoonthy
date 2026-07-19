import { i18nStore } from './i18nStore.js';

class LocalesFetcher {
  constructor() {
    this.cache = new Map();
  }

  async fetchWindow(windowName, lang = null) {
    const targetLang = lang || i18nStore.getLang();
    const cacheKey = `${targetLang}_${windowName}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      // Try to fetch from API/CDN
      const res = await fetch(`/api/locales/${targetLang}/windows/${windowName}/ui.json`);
      if (res.ok) {
        const data = await res.json();
        this.cache.set(cacheKey, data);
        return data;
      }
      throw new Error('Not found');
    } catch (e) {
      // Fallback to en-GB if target lang is not en-GB
      if (targetLang !== 'en-GB') {
        try {
          const fallbackRes = await fetch(`/api/locales/en-GB/windows/${windowName}/ui.json`);
          if (fallbackRes.ok) {
            const data = await fallbackRes.json();
            this.cache.set(cacheKey, data);
            return data;
          }
        } catch (fallbackErr) {
          console.error("LocalesFetcher fallback failed", fallbackErr);
        }
      }
      return null; // Return null if everything fails
    }
  }
  
  async fetchMarkdown(windowName, fileName, lang = null) {
    const targetLang = lang || i18nStore.getLang();
    const cacheKey = `${targetLang}_${windowName}_${fileName}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }
    
    try {
      const res = await fetch(`/api/locales/${targetLang}/windows/${windowName}/${fileName}`);
      if (res.ok) {
        const text = await res.text();
        this.cache.set(cacheKey, text);
        return text;
      }
      throw new Error('Not found');
    } catch (e) {
      if (targetLang !== 'en-GB') {
        try {
          const fallbackRes = await fetch(`/api/locales/en-GB/windows/${windowName}/${fileName}`);
          if (fallbackRes.ok) {
            const text = await fallbackRes.text();
            this.cache.set(cacheKey, text);
            return text;
          }
        } catch (fallbackErr) {}
      }
      return null;
    }
  }
}

export const localesFetcher = new LocalesFetcher();
