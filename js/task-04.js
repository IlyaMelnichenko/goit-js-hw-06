
const counterValue = document.querySelector('#value');
const decrButton = document.querySelector('button[data-action="decrement"]');
const incrButton = document.querySelector('button[data-action="increment"]');
let value=0;
decrButton.addEventListener('click',()=> { value -= 1;
counterValue.textContent=value;
});
incrButton.addEventListener('click',()=> { value += 1;
    counterValue.textContent=value;
});
