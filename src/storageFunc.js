import * as add from './addTask.js';

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(add.tasks));
};

const loadTasks = () => {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    add.tasks.length = 0;
    Array.prototype.push.apply(add.tasks, JSON.parse(savedTasks));
  }
};

export { saveTasks, loadTasks };