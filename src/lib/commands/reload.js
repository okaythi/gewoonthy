import { localesFetcher } from '../LocalesFetcher.js';

export const reloadCommand = async (args, terminal) => {
  const sys = await localesFetcher.fetchSystem() || {};
  
  // Provide visual feedback in terminal
  terminal.printLine(sys.cmd_reload || "Reloading UI strings seamlessly...");

  // Quick blink effect
  document.body.style.transition = 'opacity 0.2s';
  document.body.style.opacity = '0';
  
  setTimeout(async () => {
    // Reprint MOTD in new language
    await terminal.printMOTD();
    
    // Dispatch event for any open windows to re-render
    window.dispatchEvent(new Event('languageChanged'));
    
    // Fade back in
    document.body.style.opacity = '1';
  }, 250);
};

export const reloadMetadata = {
  description: 'Reload the DOM strings seamlessly',
  args: []
};
