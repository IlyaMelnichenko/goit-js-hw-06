const categoriesListEl = document.querySelector('.categories');
const categoriesItemElement = document.querySelectorAll('.item');

console.log('Number of categories:',categoriesItemElement.length);
categoriesItemElement.forEach(function (item,index){
console.log('Category:',item.firstElementChild.textContent); 
const qwe = item.querySelectorAll('li');
console.log('Elements:',qwe.length)
});