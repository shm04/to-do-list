import { tasks } from './addTask.js';

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadTasks = () => {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks && savedTasks !== 'undefined') {
    try {
      tasks.length = 0;
      Array.prototype.push.apply(tasks, JSON.parse(savedTasks));
      return tasks;
    } catch (error) {
      return [];
    }
  }
  return [];
};

const getTasks = () => {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks && savedTasks !== 'undefined') {
    try {
      return JSON.parse(savedTasks);
    } catch (error) {
      return [];
    }
  }
  return [];
};

export { saveTasks, loadTasks, getTasks };