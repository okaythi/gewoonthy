import { authManager, AuthState } from '../auth.js';

export const accountCommand = async (args, terminal) => {
  if (args.length === 0) {
    terminal.printLine(`account: missing argument`);
    terminal.printLine(`Usage: account [--create]`);
    return;
  }

  const arg = args[0];
  if (arg === '--create') {
    if (!authManager.user.is_guest && authManager.user.primary_group !== 'root') {
      terminal.printLine(`account: permission denied. Must be a guest or root to create accounts.`);
      return;
    }
    authManager.state = AuthState.PROMPT_CREATE_USER;
    terminal.setPrompt(`New username: `);
  } else if (arg === '--delete') {
    if (authManager.user.primary_group !== 'root') {
      terminal.printLine(`account: permission denied. Root privileges required.`);
      return;
    }
    const targetUser = args[1];
    if (!targetUser) {
      terminal.printLine(`account: missing username to delete`);
      return;
    }
    if (targetUser === authManager.user.username) {
      terminal.printLine(`account: cannot delete currently logged in user`);
      return;
    }
    authManager.deleteTarget = targetUser;
    authManager.state = AuthState.PROMPT_DELETE_USER;
    terminal.setPrompt(`Are you sure you want to delete user '${targetUser}'? [y/N] `);
  } else {
    terminal.printLine(`account: unrecognised option '${arg}'`);
  }
};

export const accountMetadata = {
  description: 'Manage user account',
  args: [
    { name: '--create', description: 'Create a new account' },
    { name: '--delete [user]', description: 'Delete an account (root only)' }
  ]
};
