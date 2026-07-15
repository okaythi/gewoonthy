import { helpCommand } from './commands/help.js';
import { aboutCommand } from './commands/about.js';
import { clearCommand } from './commands/clear.js';
import { accountCommand } from './commands/account.js';

class CommandEngine {
  constructor() {
    this.commands = new Map();
    this.registerCommand('help', helpCommand);
    this.registerCommand('about', aboutCommand);
    this.registerCommand('clear', clearCommand);
    this.registerCommand('account', accountCommand);
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
