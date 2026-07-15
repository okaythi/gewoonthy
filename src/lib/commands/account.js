export const accountCommand = async (args, terminal) => {
  if (args.length === 0) {
    terminal.printLine(`account: missing argument`);
    terminal.printLine(`Usage: account [--create]`);
    return;
  }

  const arg = args[0];
  if (arg === '--create') {
    terminal.printLine(`Account creation wizard starting... (not fully implemented yet)`);
  } else {
    terminal.printLine(`account: unrecognised option '${arg}'`);
  }
};
