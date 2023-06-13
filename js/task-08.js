const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);
const profile ={};
function onSubmit(event){
    event.preventDefault();
    
    const formTargetEl = event.currentTarget.elements;
    if (formTargetEl.email.value === "" || formTargetEl.password.value === "" ){
        alert("Будь ласка заповніть поля")
        
    }else{
       profile.email = formTargetEl.email.value; 
       profile.password = formTargetEl.password.value; 
       console.log(profile) 
        };
        formEl.reset()
    }

