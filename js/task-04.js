
const buttonPlus = document.querySelector('button[data-action="increment"]');
const buttonMinus = document.querySelector('button[data-action="decrement"]');

const valueElem = document.getElementById('value');
let counterValue = 0;

const increase = () => {
    counterValue += 1;
    valueElem.textContent = counterValue;
}

const decrease = () => {
    counterValue -= 1;
    valueElem.textContent = counterValue;
}


buttonPlus.addEventListener('click', increase);
buttonMinus.addEventListener('click', decrease);







