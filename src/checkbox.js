import * as storage from './storageFunc.js';

const toggleCheckbox = (task) => {
  task.completed = !task.completed;
  storage.saveTasks();
  return task.completed;
};

export default toggleCheckbox;
