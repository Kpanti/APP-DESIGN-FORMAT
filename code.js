const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', ()=> {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', ()=> {
    container.classList.remove("sign-up-mode");
});

// const form = document.querySelector('#sign-up-form');
// const usernameInput = document.querySelector('#username');
// const emailInput = document.querySelector('#email');
// const passwordInput =document.querySelector('#password');
// const ConfirmpaswwordInput = document.querySelector('#confirm-password');


// form.addEventListener('submit', (Event)=>{
//     Event.preventDefault();
//     validateForm();
// });

// function validateForm(){
//     if(usernameInput.value.trim()==''){
//      Error(usernameInput, 'Name can not be empty');
//     }
// }

// function Error(element, errorMessage){
//     const parent = element.parentElement;
//     parent.classList.add('error');
//     const paragraph = parent.querySelector('p');
//     paragraph.textContent = errorMessage;
// }