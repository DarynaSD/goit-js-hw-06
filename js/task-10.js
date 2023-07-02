function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const containerElement = document.querySelector('#boxes');
const inputElement = document.querySelector('input');

buttonCreate.addEventListener('click', function () {
  const amount = Number(inputElement.value);
  createElements(amount);
});

buttonDestroy.addEventListener('click', destroyElements);

function createElements(amount) {
  const initSize = 30;
  let divElements = '';
  for (let i = 1; i <= amount; i += 1) {
    const width = initSize + i * 10;
    const height = width;
    const color = getRandomHexColor();
    divElements += `<div style='width: ${width}px; height: ${height}px; background-color: ${color}'></div>`
  }
  containerElement.innerHTML = divElements;
}

function destroyElements() {
  containerElement.innerHTML = '';
  inputElement.value = '';
}



