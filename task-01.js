//task-01

  // Напиши скрипт, який:
// 1. Порахує і виведе в консоль кількість категорій 
// в ul#categories, тобто елементів li.item.

// 2. Для кожного элемента li.item у спику ul#categories, 
// знайде і виведе в консоль текст заголовку елемента 
//(тегу <h2>) і кількість елементів в категорії (усіх <li>, 
// вкладених в нього).

  const count = document.querySelectorAll('.item').length;
console.log('Number of categories: ', count);

for (let i = 0; i < count; i++) {
  const category = document.querySelectorAll('.item')[i].querySelector('h2').textContent;
  console.log('Category: ', category);
  const counts = document.querySelectorAll('.item')[i].querySelectorAll('li').length;
  console.log('Elements: ', counts);
}
