import { authManager } from '../auth.js';

export const logoutCommand = async (args, terminal) => {
  await authManager.logout(terminal);
};

export const logoutMetadata = {
  description: 'Log out of the current session',
  args: []
};
