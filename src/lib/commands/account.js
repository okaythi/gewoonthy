import { authManager, AuthState } from '../auth.js';
import { localesFetcher } from '../LocalesFetcher.js';

export const accountCommand = async (args, terminal) => {
  const sys = await localesFetcher.fetchSystem() || {};
  if (args.length === 0) {
    terminal.printLine(sys.acc_missing_arg || `account: missing argument`);
    terminal.printLine(sys.acc_usage || `Usage: account [--create]`);
    return;
  }

  const arg = args[0];
  if (arg === '--create') {
    if (!authManager.user.is_guest && authManager.user.primary_group !== 'root') {
      terminal.printLine(sys.acc_perm_create || `account: permission denied. Must be a guest or root to create accounts.`);
      return;
    }
    authManager.state = AuthState.PROMPT_CREATE_USER;
    terminal.setPrompt(sys.acc_new_user || `New username: `);
  } else if (arg === '--delete') {
    if (authManager.user.primary_group !== 'root') {
      terminal.printLine(sys.acc_perm_root || `account: permission denied. Root privileges required.`);
      return;
    }
    const targetUser = args[1];
    if (!targetUser) {
      terminal.printLine(sys.acc_missing_del || `account: missing username to delete`);
      return;
    }
    if (targetUser === authManager.user.username) {
      terminal.printLine(sys.acc_del_self || `account: cannot delete currently logged in user`);
      return;
    }
    authManager.deleteTarget = targetUser;
    authManager.state = AuthState.PROMPT_DELETE_USER;
    const promptStr = sys.acc_del_prompt ? sys.acc_del_prompt.replace('{user}', targetUser) : `Are you sure you want to delete user '${targetUser}'? [y/N] `;
    terminal.setPrompt(promptStr);
  } else {
    const unrec = sys.acc_unrecognised ? sys.acc_unrecognised.replace('{arg}', arg) : `account: unrecognised option '${arg}'`;
    terminal.printLine(unrec);
  }
};

export const accountMetadata = {
  description: 'Manage user account',
  args: [
    { name: '--create', description: 'Create a new account' },
    { name: '--delete [user]', description: 'Delete an account (root only)' }
  ]
};
