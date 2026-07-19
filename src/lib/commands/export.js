import { i18nStore } from '../i18nStore.js';
import { authManager } from '../auth.js';
import { localesFetcher } from '../LocalesFetcher.js';

export const exportCommand = async (args, terminal) => {
  const sys = await localesFetcher.fetchSystem() || {};
  if (args.length === 0) {
    terminal.printLine(sys.export_missing || 'export: missing arguments');
    return;
  }
  
  const target = args[0];
  if (target.startsWith('LANG=')) {
    const localeStr = target.split('=')[1];
    
    i18nStore.setLang(localeStr);
    
    if (authManager.user && !authManager.user.is_guest) {
      // Persistence handled similarly to locale.js
    }
    
    const setMsg = sys.export_set ? sys.export_set.replace('{locale}', localeStr) : `bash: export: LANG set to ${localeStr}`;
    terminal.printLine(setMsg);
  } else {
    const notImplMsg = sys.export_not_impl ? sys.export_not_impl.replace('{arg}', target) : `bash: export: Not implemented for ${target}`;
    terminal.printLine(notImplMsg);
  }
};

export const exportMetadata = {
  description: 'Set environment variables',
  args: []
};
