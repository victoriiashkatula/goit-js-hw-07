const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1. Створить окремий елемент <li>. 
// Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.  


const listEl = document.querySelector('#ingredients')
const liArr = []

ingredients.forEach(ingredient => {
	const itemLi = document.createElement('li')
	itemLi.className = 'item'
	itemLi.textContent = ingredient
	liArr.push(itemLi)
})

listEl.append(...liArr)
console.log(liArr);
