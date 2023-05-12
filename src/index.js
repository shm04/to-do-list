import './styles/styles.css';
import * as add from './addTask.js';
import * as storage from './storageFunc.js';
import * as create from './createDelete.js';
import inputImg from './inputImg.js';

add.input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    add.addTask();
    create.createTask();
    add.input.value = '';
    storage.saveTasks();
  }
});

inputImg.addEventListener('click', () => {
  add.addTask();
  create.createTask();
  add.input.value = '';
  storage.saveTasks();
});

window.addEventListener('load', () => {
  storage.loadTasks();
  create.createTask();
});
