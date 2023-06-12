const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
inputEl.addEventListener('input',()=>{
    spanEl.style.fontSize = parseInt(inputEl.value)+"px";
})
