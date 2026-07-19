import { i18nStore, supportedLocales } from '../i18nStore.js';
import { authManager } from '../auth.js';
import { localesFetcher } from '../LocalesFetcher.js';

export const localeCommand = async (args, terminal) => {
  const sys = await localesFetcher.fetchSystem() || {};
  if (args.length === 0) {
    const currMsg = sys.loc_curr ? sys.loc_curr.replace('{lang}', i18nStore.getLang()) : `Current locale: ${i18nStore.getLang()}`;
    terminal.printLine(currMsg);
    return;
  }

  let requestedLocale = null;
  
  if (args[0] === 'set-locale' && args[1] && args[1].startsWith('LANG=')) {
    requestedLocale = args[1].split('=')[1];
  } else if (args[0].startsWith('--')) {
    requestedLocale = args[0].substring(2);
  } else if (args[0].startsWith('LANG=')) {
    requestedLocale = args[0].replace('LANG=', '');
  }

  if (!requestedLocale) {
    terminal.printLine(sys.loc_invalid || `bash: locale: Invalid syntax. Try 'locale --[locale]' or 'locale set-locale LANG=[locale]'.`);
    return;
  }

  if (!supportedLocales.includes(requestedLocale)) {
    const unsuppMsg = sys.loc_unsupported ? sys.loc_unsupported.replace('{lang}', requestedLocale) : `bash: locale: Unsupported locale '${requestedLocale}'.`;
    terminal.printLine(unsuppMsg);
    const suppMsg = sys.loc_supported ? sys.loc_supported.replace('{list}', supportedLocales.join(', ')) : `Supported locales are: ${supportedLocales.join(', ')}`;
    terminal.printLine(suppMsg);
    return;
  }

  const isGuest = !authManager.user || authManager.user.is_guest;

  if (!isGuest) {
    // Logged in user: persist to backend and local storage
    i18nStore.setLang(requestedLocale, true);
    try {
      await fetch('/api/user/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authManager.token}`
        },
        body: JSON.stringify({ lang: requestedLocale })
      });
    } catch (e) {
      // Ignore network errors for settings sync
    }
    const msg = sys.loc_set_persist ? sys.loc_set_persist.replace('{lang}', requestedLocale) : `Language has been set to: ${requestedLocale}. You may run 'reload' in order to view the changes now. This preference has been saved to your user account.`;
    terminal.printLine(msg);
  } else {
    // Guest logic
    try {
      const res = await fetch('/api/location');
      const { isEU } = await res.json();

      if (isEU) {
        const msg = sys.loc_eu_prompt ? sys.loc_eu_prompt.replace('{lang}', requestedLocale) : `Language has been set to: ${requestedLocale}. You may run 'reload' in order to view the changes now. Would you like to save this preference locally in your browser? (y/N)`;
        terminal.printLine(msg);
        
        // Setup transient interactive state for y/N prompt
        const oldHandle = authManager.handleInput;
        authManager.state = 'LOCALE_PROMPT'; 
        
        authManager.handleInput = async (value, term) => {
          const val = value.trim().toLowerCase();
          if (val === 'y' || val === 'yes') {
            i18nStore.setLang(requestedLocale, true);
            term.printLine(sys.loc_eu_saved || 'Preference saved locally.');
          } else {
            i18nStore.setLang(requestedLocale, false); // transient
            term.printLine(sys.loc_eu_not_saved || 'Preference not saved.');
          }
          // Restore
          authManager.state = 'READY';
          authManager.handleInput = oldHandle;
          term.setPrompt(`sudothy@${authManager.user.username} $ `);
          term.prompt();
        };
      } else {
        // Anywhere else
        i18nStore.setTemporaryLang(requestedLocale, 25);
        const msg = sys.loc_guest_save ? sys.loc_guest_save.replace('{lang}', requestedLocale) : `Language has been set to: ${requestedLocale}. You may run 'reload' in order to view the changes now. Please create an account with 'account --create' to save your preference.`;
        terminal.printLine(msg);
      }
    } catch (e) {
      // Fallback if location API fails
      i18nStore.setTemporaryLang(requestedLocale, 25);
      const msg = sys.loc_guest_save ? sys.loc_guest_save.replace('{lang}', requestedLocale) : `Language has been set to: ${requestedLocale}. You may run 'reload' in order to view the changes now. Please create an account with 'account --create' to save your preference.`;
      terminal.printLine(msg);
    }
  }
};

export const localeMetadata = {
  description: 'Change the system language (e.g. \'locale --fr-BE\')',
  args: []
};
