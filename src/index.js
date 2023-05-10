import './styles/styles.css';
import dots from './assets/dots.png';

const list = document.querySelector('.list');
const input = document.querySelector('.input');

const tasks = [];

const add = () => {
  const inputValue = input.value;
  const newTask = { completed: false, description: `${inputValue}`, index: 0 };
  tasks.push(newTask);
};

const create = () => {
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerHTML = `
    <input type="checkbox" value="${task.completed}">
    <p class="li-text">${task.description}</p>
    <img src="${dots}" id="${index}" class="dots-img">
    `;
    list.appendChild(li);
  });
};

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    add();
    create();
    input.value = '';
  }
});
