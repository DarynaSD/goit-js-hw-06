// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
// по кліку на button.change - color і виводить значення кольору в span.color.




const colorizeButton = document.querySelector('.change-color');
const bodyElem = document.querySelector('body');
const spanElem = document.querySelector('.color');

colorizeButton.addEventListener('click', changeBgColor);

function changeBgColor() {
  const newColor = getRandomHexColor();
  bodyElem.style.backgroundColor = newColor;
  spanElem.textContent = `${newColor}`;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
