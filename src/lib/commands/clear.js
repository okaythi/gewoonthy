export const clearCommand = async (args, terminal) => {
  terminal.output.innerHTML = '';
};

export const clearMetadata = {
  description: 'Clear the terminal screen',
  args: []
};
