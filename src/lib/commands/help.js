export const helpCommand = async (args, terminal) => {
  const helpText = `
Available commands:
  help      Display this help message
  about     Open the system information interface
  clear     Clear the terminal screen
  account   Manage user account
            --create    Create a new account

System built on Ubuntu 26.04 LTS Simulation Engine.
  `;
  terminal.printLine(helpText);
};
