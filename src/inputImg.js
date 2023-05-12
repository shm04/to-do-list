import enter from './assets/enter.png';

const inputImg = document.createElement('img');
inputImg.src = enter;
inputImg.classList.add('enter-img');

const inputDiv = document.querySelector('.input-div');

inputDiv.appendChild(inputImg);

export default inputImg;