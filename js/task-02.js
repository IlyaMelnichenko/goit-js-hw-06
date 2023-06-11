const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const qvb =[];
const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(function(name,index){
const ingredientItem = document.createElement('li');
ingredientItem.textContent=ingredients[index];
ingredientItem.classList='item';
qvb.push(ingredientItem);
return qvb;
});

ingredientsList.append(...qvb);
console.log(ingredientsList);