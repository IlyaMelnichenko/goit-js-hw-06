const outputNameEl = document.querySelector('#name-output');
const inputNameEl = document.querySelector('#name-input');
inputNameEl.addEventListener('input',()=>{
    if (inputNameEl.value === ""){
        outputNameEl.textContent ='Anonymous';
    }else{
        outputNameEl.textContent = inputNameEl.value;
    
    }   
})