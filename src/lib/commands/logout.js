import { authManager } from '../auth.js';

export const logoutCommand = async (args, terminal) => {
  await authManager.logout(terminal);
};
