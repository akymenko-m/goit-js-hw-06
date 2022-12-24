const validationInput = document.querySelector('#validation-input');
const inputDataLength = document.querySelector('input[data-length="6"]');

validationInput.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === Number(inputDataLength.dataset.length)) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
        return;
    }
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
});