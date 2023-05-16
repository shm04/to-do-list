import './styles/styles.css';
import * as add from './addTask.js';
import * as storage from './storageFunc.js';
import * as create from './createDelete.js';
import inputImg from './inputImg.js';

document.addEventListener('DOMContentLoaded', () => {
  create.createTask();

  add.input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      add.addTask();
      add.input.value = '';
      storage.saveTasks();
      create.createTask(storage.getTasks());
    }
  });

  inputImg.addEventListener('click', () => {
    add.addTask();
    add.input.value = '';
    storage.saveTasks();
    create.createTask(storage.getTasks());
  });

  window.addEventListener('load', () => {
    storage.loadTasks();
    create.createTask(storage.getTasks());
  });
});