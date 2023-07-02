// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям 
// властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


// submit
// preventDefaul()
// if (поля заповнені) {
//     зібрати значення полів  в об * єкт (для доступу власт. elements)
//     законсолити об * єкт
//     очистити поля форми (метод reset)
// } 
// else {
//     alert з повідомленням
// } 


const buttonElem = document.querySelector('button');
const formElem = document.querySelector('form');

formElem.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {

    return alert('All fields must be filled! Please try again');
  }

  const submitObj = {
    email: email.value,
    password: password.value
  }
  console.log(submitObj);
  event.currentTarget.reset();
}




