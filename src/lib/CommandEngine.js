import { helpCommand } from './commands/help.js';
import { aboutCommand } from './commands/about.js';

class CommandEngine {
  constructor() {
    this.commands = new Map();
    this.registerCommand('help', helpCommand);
    this.registerCommand('about', aboutCommand);
  }

  registerCommand(name, handler) {
    this.commands.set(name, handler);
  }

  async execute(input, terminal) {
    const tokens = input.trim().split(/\s+/);
    if (!tokens[0]) return;

    const cmdName = tokens[0];
    const args = tokens.slice(1);

    if (!this.commands.has(cmdName)) {
      terminal.printLine(`bash: ${cmdName}: command not found`);
      return;
    }

    try {
      await this.commands.get(cmdName)(args, terminal);
    } catch (e) {
      terminal.printLine(`bash: ${cmdName}: ${e.message}`);
    }
  }
}

export const commandEngine = new CommandEngine();
