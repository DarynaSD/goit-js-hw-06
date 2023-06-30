// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє його
// поточне значення в span#name - output.Якщо інпут
// порожній, у спані повинен відображатися рядок "Anonymous".






const inputElem = document.getElementById('name-input');
const spanElem = document.getElementById('name-output');

inputElem.addEventListener('input', handler);

console.log(spanElem.textContent);
console.log(inputElem.value);

function handler(event) {
    event.preventDefault();
    if (inputElem.value) {
        spanElem.textContent = inputElem.value;
    }
    else 
    {spanElem.textContent = 'Anonymous'};
}