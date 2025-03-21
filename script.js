const userRegex =    /^(?=.*[a-z])(?=.*[0-9]).{6,10}$/;
const passwordRegex =    /^(?=.*[a-z])(?=.*[0-9]).{6,16}$/;
const emailRegex =       /^\S+@\S+\.\S+$/;
const phonenumberRegex = /^[0-9]{6,16}$/;

//selectores
const countries = document.querySelector(`#countries`); 
const usernameInput = document.querySelector(`#username`);
const emailInput = document.querySelector(`#email`);
const phoneCode = document.querySelector(`#phoneCode`);
const phoneInput = document.querySelector(`#phone`);
const passwordInput = document.querySelector(`#password`);
const confirmPasswordInput = document.querySelector(`#confirmPassword`);
const formbtn = document.querySelector(`#form-btn`);
const form = document.querySelector(`#form`);

//Validacion

let usernameValidation = false;
let emailValidation = false;
let phoneValidation = false;
let passwordValidation = false;
let confirmPasswordValidation = false; 
let countriesValidation = false;

//Funcion

const validacion = (e, validacion, element) =>{ //la "e" es el evento
 const information =e.target.parentElement.children[1]; //por el "label" en html se sube un numero
if (validacion) {
    element.classList.add(`correct`)
    element.classList.remove(`incorrect`)
    information.classList.remove(`show-info`)
} else {
    element.classList.add(`incorrect`)
    element.classList.remove(`correct`)
    information.classList.add(`show-info`)
}
};



[...countries].forEach(option => {
    option.innerHTML = option.innerHTML.split(`(`)[0];
});

//validaciones
usernameInput.addEventListener(`input`, e =>{
usernameValidation = userRegex.test(e.target.value);
//const information = e.target.parentElement.children[1]; //por el "label" en html se sube un numero
//if (usernameValidation) {
//    usernameInput.classList.add('correct');
 //   usernameInput.classList.remove('incorrect');
 //   information.classList.remove('show-info');
//} else {
 //   usernameInput.classList.add('correct');
//    usernameInput.classList.remove('incorrect');
//    information.classList.add('show-info');
//}
validacion(e, usernameValidation, usernameInput)
});
//e.target.value es lo que el usuario escribe en el input 


emailInput.addEventListener(`input`, e => {
emailValidation = emailRegex.test(e.target.value);
    validacion(e, emailValidation, emailInput)

})

countries.addEventListener(`input`, e =>{
const optionSelected = [...e.target.children].find(option => option.selected);
//console.log(optionSelected)
phoneCode.innerHTML = `+${optionSelected.value}`
countries.classList.add("correct");
phoneCode.classList.add("correct");
validation(e,null,null);
});

phoneInput.addEventListener(`input`, e =>{
    phoneValidation = phonenumberRegex.test(e.target.value);
    const information =e.target.parentElement.parentElement.children[1]; //por el "label" en html se sube un numero
    if (phoneValidation) {
        phoneInput.classList.add(`correct`)
        phoneInput.classList.remove(`incorrect`)
        information.classList.remove(`show-info`)
    } else {
        phoneInput.classList.add(`incorrect`)
        phoneInput.classList.remove(`correct`)
        information.classList.add(`show-info`)
    }
    });

    passwordInput.addEventListener(`input`, e =>{
     passwordValidationValidation = passwordRegex.test(e.target.value);
    validacion(e, passwordValidationValidation, passwordInput);
        });

    confirmPasswordInput.addEventListener(`input`, e =>{
    confirmPasswordValidation = passwordInput.value  === e.target.value;
    validacion(e, confirmPasswordValidation, confirmPasswordInput);
        });

form.addEventListener("submit", e => {
    e,preventdefault();
    const user = {
        username : usernameInput.value,
        email : emailInput.value,
        phone : phoneInput.value,
        password : `${phoneCode.innerHTML} ${passwordInput.value}`,
        
    }
    console.log(user);

})
