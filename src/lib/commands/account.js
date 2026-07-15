import { authManager, AuthState } from '../auth.js';

export const accountCommand = async (args, terminal) => {
  if (args.length === 0) {
    terminal.printLine(`account: missing argument`);
    terminal.printLine(`Usage: account [--create]`);
    return;
  }

  const arg = args[0];
  if (arg === '--create') {
    authManager.state = AuthState.PROMPT_CREATE_USER;
    terminal.setPrompt(`New username: `);
  } else {
    terminal.printLine(`account: unrecognised option '${arg}'`);
  }
};
