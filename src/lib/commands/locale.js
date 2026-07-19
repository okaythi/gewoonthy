import { i18nStore } from '../i18nStore.js';
import { authManager } from '../auth.js';

const VALID_LOCALES = [
  'en-GB', 'nl-BE', 'fr-BE', 'pt-BR', 'es-AR', 'sv-SE', 'ja-JP', 'en-US', 'de-DE', 'zh-CN'
];

export const localeCommand = async (args, terminal) => {
  let requestedLocale = null;

  if (args.length === 0) {
    terminal.printLine(`Current locale: ${i18nStore.getLang()}`);
    return;
  }

  // Parse `localectl set-locale LANG=en-US`, `locale set-locale LANG=zh-CN`, or `locale --fr-BE`
  if (args[0] === 'set-locale' && args[1] && args[1].startsWith('LANG=')) {
    requestedLocale = args[1].replace('LANG=', '');
  } else if (args[0].startsWith('--')) {
    requestedLocale = args[0].replace('--', '');
  } else if (args[0].startsWith('LANG=')) {
    requestedLocale = args[0].replace('LANG=', '');
  }

  if (!requestedLocale) {
    terminal.printLine("bash: locale: Invalid syntax. Try 'locale --[locale]' or 'locale set-locale LANG=[locale]'.");
    return;
  }

  if (!VALID_LOCALES.includes(requestedLocale)) {
    terminal.printLine(`bash: locale: Unsupported locale '${requestedLocale}'.`);
    terminal.printLine(`Supported locales are: ${VALID_LOCALES.join(', ')}`);
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
    terminal.printLine(`Language has been set to: ${requestedLocale}. You may run 'reload' in order to view the changes now. This preference has been saved to your user account.`);
  } else {
    // Guest logic
    try {
      const res = await fetch('/api/location');
      const { isEU } = await res.json();

      if (isEU) {
        terminal.printLine(`Language has been set to: ${requestedLocale}. You may run 'reload' in order to view the changes now. Would you like to save this preference locally in your browser? (y/N)`);
        
        // Setup transient interactive state for y/N prompt
        const originalPrompt = terminal.currentPrompt;
        terminal.setPrompt(''); // No prompt prefix for input
        
        const oldHandle = authManager.handleInput;
        authManager.state = 'LOCALE_PROMPT'; // hijacking transient state
        
        authManager.handleInput = async (value, term) => {
          const val = value.trim().toLowerCase();
          if (val === 'y' || val === 'yes') {
            i18nStore.setLang(requestedLocale, true);
            term.printLine('Preference saved locally.');
          } else {
            i18nStore.setLang(requestedLocale, false); // transient
            term.printLine('Preference not saved.');
          }
          // Restore
          authManager.state = 'READY';
          authManager.handleInput = oldHandle;
          term.setPrompt(originalPrompt);
          term.prompt();
        };
      } else {
        // Anywhere else
        i18nStore.setTemporaryLang(requestedLocale, 25);
        terminal.printLine(`Language has been set to: ${requestedLocale}. You may run 'reload' in order to view the changes now. Please create an account with 'account --create' to save your preference.`);
      }
    } catch (e) {
      // Fallback if location API fails
      i18nStore.setTemporaryLang(requestedLocale, 25);
      terminal.printLine(`Language has been set to: ${requestedLocale}. You may run 'reload' in order to view the changes now. Please create an account with 'account --create' to save your preference.`);
    }
  }
};

export const localeMetadata = {
  description: "Change the system language (e.g. 'locale --fr-BE')",
  args: []
};
