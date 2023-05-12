import dots from './assets/dots.png';
import deleteIcon from './assets/delete.png';
import { tasks } from './addTask.js';
import * as storage from './storageFunc.js';

const list = document.querySelector('.list');

const createTask = () => {
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerHTML = `
      <input type="checkbox" value="${task.completed}">
      <p class="li-text">${task.description}</p>
      <img src="${deleteIcon}" id="${index}" class="delete-icon">
      <img src="${dots}" id="${index}" class="dots-img">
    `;
    list.appendChild(li);
    task.index = index.toString();

    const taskText = li.querySelector('.li-text');

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
  });

  const trashcanIcon = document.querySelectorAll('.delete-icon');

  trashcanIcon.forEach((trashcanIcon) => {
    trashcanIcon.addEventListener('click', () => {
      const updatedTasks = tasks.filter((t) => t.index !== trashcanIcon.id);
      tasks.length = 0;
      Array.prototype.push.apply(tasks, updatedTasks);
      createTask();
      storage.saveTasks();
    });
  });
};

export { createTask, list };
