import { helpCommand, helpMetadata } from './commands/help.js';
import { aboutCommand, aboutMetadata } from './commands/about.js';
import { clearCommand, clearMetadata } from './commands/clear.js';
import { accountCommand, accountMetadata } from './commands/account.js';
import { logoutCommand, logoutMetadata } from './commands/logout.js';
import { projectsCommand, projectsMetadata } from './commands/projects.js';
import { authManager } from './auth.js';

class CommandEngine {
  constructor() {
    this.commands = new Map();
    this.registerCommand('help', helpCommand, helpMetadata);
    this.registerCommand('about', aboutCommand, aboutMetadata);
    this.registerCommand('clear', clearCommand, clearMetadata);
    this.registerCommand('account', accountCommand, accountMetadata);
    this.registerCommand('logout', logoutCommand, logoutMetadata);
    this.registerCommand('projects', projectsCommand, projectsMetadata);
  }

  registerCommand(name, handler, metadata = { description: 'No description provided', args: [] }) {
    this.commands.set(name, { handler, metadata });
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
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authManager.token}`
        },
        body: JSON.stringify({ command: cmdName })
      });
      const data = await res.json();

      if (data.allowed) {
        await this.commands.get(cmdName).handler(args, terminal);
      } else {
        terminal.printLine(`bash: ${cmdName}: ${data.error || 'Permission denied'}`);
      }
    } catch (e) {
      terminal.printLine(`bash: ${cmdName}: Error checking permissions`);
    }
  }
}

export const commandEngine = new CommandEngine();
