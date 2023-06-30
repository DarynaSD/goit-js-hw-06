const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const imagesArr = images.map(image => {
  const imgSrc = image.url;
  const imgAlt = image.alt;
return `<li class="img-item"><img src="${imgSrc}" alt="${imgAlt}" class="img"></li>`
})

const containerElem = document.querySelector('.gallery');
containerElem.insertAdjacentHTML('beforeend', imagesArr.join(''));
console.log(imagesArr);


