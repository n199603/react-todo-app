export const getCollatedTasks = (selectedProject) => {
  collatedTasksExist.find((task) => task.key === selectedProject);
};
