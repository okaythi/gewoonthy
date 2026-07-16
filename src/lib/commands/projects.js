import { openProjectsWindow } from '../ui/ProjectsWindow.js';

export const projectsCommand = async (args, terminal) => {
  openProjectsWindow();
};

export const projectsMetadata = {
  description: 'Open the projects explorer',
  args: []
};
