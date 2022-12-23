const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert('All fields must be filled!');
  }
    
    const userData = {};
    userData.email = email.value;
    userData.password = password.value;
    console.log(userData);

    event.currentTarget.reset();
});
    
//моя чернетка
// const inputFieldEmail = document.querySelector('input');
// console.log(inputFieldEmail);

// const inputField = document.querySelectorAll('input');
// console.log(inputField);

// loginForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     for (const el of inputField) {
//         const { email, password } = el;
//         if (el.value === '') {
//             return alert('All fields must be filled!');
//         }
//         const userData = {};
//         userData.email = el.value;
//         userData.password = el.value;
//         console.log(userData);

//         // console.log(el);
//         // console.log(el.value);
//     }

//     event.currentTarget.reset();
// });

