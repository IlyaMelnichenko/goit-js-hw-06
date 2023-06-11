const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector('.ingredients');
ingredients.forEach(function(name,index){
  
const ingredientItem = document.createElement('li');
ingredientItem.textContent=ingredients[index];
ingredientItem.classList='item';
console.log(ingredientItem);
return ingredientItem;
});
console.log(ingredientItem);