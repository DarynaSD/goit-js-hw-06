// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const categoriesArr = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesArr.length}`);

categoriesArr.forEach((category) => {
    const titleElem = document.querySelector('li > h2');
    const categoryName = titleElem.textContent;
    console.log(`Category: ${categoryName}`);


    const categorySum = (category.querySelectorAll('li')).length;
    console.log(`Elements: ${categorySum}`);
});







