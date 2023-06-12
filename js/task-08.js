const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event){
    event.preventDefault();
    
    const formTargetEl = event.currentTarget.elements;
    if (formTargetEl.email.value === "" || formTargetEl.password.value === "" ){
        alert("Будь ласка заповніть поля")
        
    }else{
        const formData = new FormData(event.currentTarget)
        formData.forEach((value,name)=>{
            console.log(name+"="+value)
        });
        formEl.reset()
    }

}