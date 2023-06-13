
const inputEl= document.querySelector("#validation-input");

inputEl.addEventListener("blur",()=>{
    console.log(inputEl.value.length)
if(inputEl.value.length === parseInt(inputEl.getAttribute('data-length'))){
    inputEl.classList.add('valid');
}else {
    inputEl.classList.add('invalid');
}

});
