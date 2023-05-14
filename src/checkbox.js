import * as storage from './storageFunc.js';
import { tasks } from './addTask.js';

const toggleCheckbox = (taskText, task, checkbox) => {
  task.completed = checkbox.checked;
  taskText.style.textDecoration = task.completed ? 'line-through' : 'none';
  storage.saveTasks(tasks);
};

export default toggleCheckbox;
