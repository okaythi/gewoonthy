import { commandEngine } from '../CommandEngine.js';
import { localesFetcher } from '../LocalesFetcher.js';

export const helpCommand = async (args, terminal) => {
  const sys = await localesFetcher.fetchSystem() || {};
  let helpText = sys.help_header || '\nAvailable commands:\n';
  
  for (const [cmdName, { metadata }] of commandEngine.commands.entries()) {
    if (cmdName === 'localectl' || cmdName === 'language') continue;
    const desc = sys[`${cmdName}_desc`] || sys[`${cmdName === 'localectl' || cmdName === 'language' ? 'locale' : cmdName}_desc`] || metadata.description;
    helpText += `  ${cmdName.padEnd(10)} ${desc}\n`;
    if (metadata.args && metadata.args.length > 0) {
      for (const arg of metadata.args) {
        const argDesc = sys[`${cmdName}_desc_${arg.name.replace(/[^a-zA-Z]/g, '')}`] || arg.description;
        helpText += `    ${arg.name.padEnd(14)} ${argDesc}\n`;
      }
    }
  }
  
  terminal.printLine(helpText);
};

export const helpMetadata = {
  description: 'Display this help message',
  args: []
};
