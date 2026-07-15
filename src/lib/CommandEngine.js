import { helpCommand } from './commands/help.js';
import { aboutCommand } from './commands/about.js';
import { clearCommand } from './commands/clear.js';
import { accountCommand } from './commands/account.js';
import { logoutCommand } from './commands/logout.js';

class CommandEngine {
  constructor() {
    this.commands = new Map();
    this.registerCommand('help', helpCommand);
    this.registerCommand('about', aboutCommand);
    this.registerCommand('clear', clearCommand);
    this.registerCommand('account', accountCommand);
    this.registerCommand('logout', logoutCommand);
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
      const res = await fetch('/api/execute', {
        method: 'POST',
        body: JSON.stringify({ command: cmdName })
      });
      const data = await res.json();

      if (data.allowed) {
        await this.commands.get(cmdName)(args, terminal);
      } else {
        terminal.printLine(`bash: ${cmdName}: ${data.error || 'Permission denied'}`);
      }
    } catch (e) {
      terminal.printLine(`bash: ${cmdName}: Error checking permissions`);
    }
  }
}

export const commandEngine = new CommandEngine();
