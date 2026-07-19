import { helpCommand, helpMetadata } from './commands/help.js';
import { aboutCommand, aboutMetadata } from './commands/about.js';
import { clearCommand, clearMetadata } from './commands/clear.js';
import { accountCommand, accountMetadata } from './commands/account.js';
import { logoutCommand, logoutMetadata } from './commands/logout.js';
import { projectsCommand, projectsMetadata } from './commands/projects.js';
import { uptimeCommand, uptimeMetadata } from './commands/uptime.js';
import { localeCommand, localeMetadata } from './commands/locale.js';
import { exportCommand, exportMetadata } from './commands/export.js';
import { reloadCommand, reloadMetadata } from './commands/reload.js';
import { authManager } from './auth.js';
import { localesFetcher } from './LocalesFetcher.js';

class CommandEngine {
  constructor() {
    this.commands = new Map();
    this.registerCommand('help', helpCommand, helpMetadata);
    this.registerCommand('about', aboutCommand, aboutMetadata);
    this.registerCommand('clear', clearCommand, clearMetadata);
    this.registerCommand('account', accountCommand, accountMetadata);
    this.registerCommand('logout', logoutCommand, logoutMetadata);
    this.registerCommand('projects', projectsCommand, projectsMetadata);
    this.registerCommand('uptime', uptimeCommand, uptimeMetadata);
    this.registerCommand('locale', localeCommand, localeMetadata);
    this.registerCommand('localectl', localeCommand, localeMetadata);
    this.registerCommand('language', localeCommand, localeMetadata);
    this.registerCommand('export', exportCommand, exportMetadata);
    this.registerCommand('reload', reloadCommand, reloadMetadata);
  }

  registerCommand(name, handler, metadata = { description: 'No description provided', args: [] }) {
    this.commands.set(name, { handler, metadata });
  }

  async execute(input, terminal) {
    if (!input.trim()) return;

    const parts = input.trim().match(/(?:[^\s"]+|"[^"]*")+/g) || [];
    const commandName = parts[0].toLowerCase();
    const args = parts.slice(1).map(arg => arg.replace(/(^"|"$)/g, ''));

    const sys = await localesFetcher.fetchSystem() || {};

    if (this.commands.has(commandName)) {
      const { handler, metadata } = this.commands.get(commandName);
      try {
        const res = await fetch('/api/execute', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authManager.token}`
          },
          body: JSON.stringify({ command: commandName })
        });
        const data = await res.json();

        if (data.allowed) {
          await handler(args, terminal);
        } else {
          const errMsg = sys.cmd_perm_denied ? sys.cmd_perm_denied.replace('{cmd}', commandName).replace('{err}', data.error || 'Permission denied') : `bash: ${commandName}: ${data.error || 'Permission denied'}`;
          terminal.printLine(errMsg);
        }
      } catch (e) {
        const errMsg = sys.cmd_error_perms ? sys.cmd_error_perms.replace('{cmd}', commandName) : `bash: ${commandName}: Error checking permissions`;
        terminal.printLine(errMsg);
      }
    } else {
      const errMsg = sys.cmd_not_found ? sys.cmd_not_found.replace('{cmd}', commandName) : `bash: ${commandName}: command not found`;
      terminal.printLine(errMsg);
    }
  }
}

export const commandEngine = new CommandEngine();
