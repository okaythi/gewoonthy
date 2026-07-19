import { i18nStore } from '../i18nStore.js';

export const exportCommand = async (args, terminal) => {
  if (args.length === 0) {
    terminal.printLine('export: missing arguments');
    return;
  }
  
  if (args[0].startsWith('LANG=')) {
    const locale = args[0].replace('LANG=', '');
    i18nStore.setTemporaryLang(locale, 60 * 24); // Transient for session/24h
    terminal.printLine(`bash: export: LANG set to ${locale}`);
  } else {
    terminal.printLine(`bash: export: Not implemented for ${args[0]}`);
  }
};

export const exportMetadata = {
  description: 'Set environment variables',
  args: []
};
