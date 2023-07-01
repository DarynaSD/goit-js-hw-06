// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його
// атрибуті data - length.
// Якщо введена правильна кількість символів, то
// border інпуту стає зеленим, якщо неправильна кількість - червоним.


const inputElem = document.querySelector('input');
// const rightLength = Number(inputElem.getAttribute('data-length'));
const rightLength = Number(inputElem.dataset.length);

inputElem.addEventListener('blur', changeColor);

function changeColor() {
    
    if (inputElem.value.length === rightLength) {
        inputElem.classList.add('valid');
        inputElem.classList.remove('invalid');
    } else {
    inputElem.classList.add('invalid');
    inputElem.classList.remove('valid');
    }

}

// console.log(inputElem.classList.contains('#validation-input'));
// console.log(inputElem.attributes)
// console.log(inputElem.value.length)
// console.log(typeof(inputElem.value.length))

// console.log(rightLength)
// console.log(typeof (rightLength))
// console.log(inputElem.classList.contains('.invalid'))
