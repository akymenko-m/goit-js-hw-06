const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingregientsElements = ingredients.map(el => {
  const createItem = document.createElement('li');
  createItem.textContent = (el);
  createItem.classList.add('item');
  return createItem;
});

const ingregientsList = document.querySelector("#ingredients");

ingregientsList.append(...ingregientsElements);
// console.log(ingregientsList);