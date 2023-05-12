const input = document.querySelector('.input');

const tasks = [];

const addTask = () => {
  const inputValue = input.value;
  const newTask = { completed: false, description: `${inputValue}`, index: 0 };
  tasks.push(newTask);
};

export { addTask, input, tasks };