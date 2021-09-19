const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingridientsList = document.querySelector('#ingredients');
const arrayOfIngridients = [];
ingredients.forEach(ingridient => {
  const newItem = document.createElement('li');
  newItem.textContent = ingridient;

  arrayOfIngridients.push(newItem);
});

ingridientsList.append(...arrayOfIngridients);
