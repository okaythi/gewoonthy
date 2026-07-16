import { commandEngine } from '../CommandEngine.js';

export const helpCommand = async (args, terminal) => {
  let helpText = '\nAvailable commands:\n';
  
  for (const [cmdName, { metadata }] of commandEngine.commands.entries()) {
    helpText += `  ${cmdName.padEnd(10)} ${metadata.description}\n`;
    if (metadata.args && metadata.args.length > 0) {
      for (const arg of metadata.args) {
        helpText += `    ${arg.name.padEnd(14)} ${arg.description}\n`;
      }
    }
  }
  
  terminal.printLine(helpText);
};

export const helpMetadata = {
  description: 'Display this help message',
  args: []
};
