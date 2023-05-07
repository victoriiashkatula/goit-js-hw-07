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




// Напиши скрипт для створення галереї зображень 
//на підставі масиву даних. 
//HTML містить список ul.gallery.


// Використовуй масив об'єктів images для створення елементів <img>, 
// вкладених в <li>. Для створення розмітки використовуй шаблонні рядки 
// і метод insertAdjacentHTML().

// =Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// =Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.


const galleryList = document.querySelector('.gallery')
const markup = images
	.map(image => `<img class="pictures" src=${image.url} width = '400' alt='${image.alt}'>`)
	.join("");
  console.log("markup:", markup);
  galleryList.insertAdjacentHTML('beforeend', markup);
  
const pictures = document.querySelectorAll('.pictures');

galleryList.style.display = 'flex';
galleryList.style.flexWrap = 'column';
galleryList.style.listStyle = 'none';
galleryList.style.gap = '20px';
galleryList.style.justifyContent = 'center';

console.log(galleryList);
