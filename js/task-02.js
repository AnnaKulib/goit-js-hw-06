// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const itemsArr = [];

const sortIngredientsArr = ingredients.map (ingredient => {
  const elemOfIngredientsArr = document.createElement('li');
  elemOfIngredientsArr.classList.add('item');
  elemOfIngredientsArr.textContent = ingredient;

  itemsArr.push(elemOfIngredientsArr);
});

ingredientsList.append(...itemsArr);



