import { tasks } from './addTask.js';
import * as storage from './storageFunc.js';
import deleteIcon from './assets/delete.png';
import dots from './assets/dots.png';
import toggleCheckbox from './checkbox.js';

const list = document.querySelector('.list');

const createTask = (loadedTasks) => {
  const taskList = loadedTasks || tasks;

  list.innerHTML = '';

  taskList.forEach((task, index) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerHTML = `
      <input class="checkbox" type="checkbox" ${task.completed ? 'checked' : ''}>
      <p class="li-text" style="text-decoration: ${task.completed ? 'line-through' : 'none'}">${task.description}</p>
      <img src="${deleteIcon}" id="${index + 1}" class="delete-icon">
      <img src="${dots}" class="dots-img">
    `;
    list.appendChild(li);
    task.index = index + 1;

    const taskText = li.querySelector('.li-text');
    const checkbox = li.querySelector('.checkbox');

    taskText.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = task.description;
      input.classList.add('edit-input');

      input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          task.description = input.value;
          createTask();
          storage.saveTasks();
        }
      });

      input.addEventListener('blur', () => {
        task.description = input.value;
        createTask();
        storage.saveTasks();
      });

      taskText.replaceWith(input);
    });

    checkbox.addEventListener('change', () => {
      toggleCheckbox(taskText, task, checkbox);
    });
  });

  const trashcanIcon = document.querySelectorAll('.delete-icon');

  trashcanIcon.forEach((trashcanIcon) => {
    trashcanIcon.addEventListener('click', () => {
      const trashcanId = parseInt(trashcanIcon.id, 10);
      const updatedTasks = tasks.filter((t) => t.index !== trashcanId);
      tasks.length = 0;
      Array.prototype.push.apply(tasks, updatedTasks);
      createTask();
      storage.saveTasks(tasks);
    });
  });

  const clear = document.querySelector('.clear-all');

  clear.addEventListener('click', () => {
    const incompleteTasks = tasks.filter((task) => !task.completed);
    tasks.length = 0;
    Array.prototype.push.apply(tasks, incompleteTasks);
    createTask();
    storage.saveTasks();
  });
};

export { createTask, list };