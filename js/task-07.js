// Напиши скрипт, який реагує на зміну значення input#font-size-control
// (подія input) і змінює інлайн - стиль span#text,
// оновлюючи властивість font - size. В результаті,
// перетягуючи повзунок, буде змінюватися розмір тексту.


const inputElem = document.querySelector('#font-size-control');
const outputElem = document.querySelector('#text');

inputElem.addEventListener('input', e => {
    outputElem.style.fontSize = e.target.value + 'px';
});





