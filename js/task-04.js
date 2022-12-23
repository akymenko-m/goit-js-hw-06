let counterValue = 0;
const spanEl = document.querySelector('#value');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

buttonDecrement.addEventListener('click', () => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
    // console.log(counterValue);
    // console.log('textContent', spanEl.textContent);
});

buttonIncrement.addEventListener('click', () => {
    counterValue += 1;
    spanEl.textContent = counterValue;
    // console.log(counterValue);
    // console.log('textContent', spanEl.textContent);
});

