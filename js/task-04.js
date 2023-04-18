const spanEl = document.querySelector("#value");
const buttonDecrement = document.querySelector(
    'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
    'button[data-action="increment"]'
);
const resetButton = document.querySelector('button[data-action="reset"]');

let counterValue = 0;

buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
});

buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    spanEl.textContent = counterValue;
});

resetButton.addEventListener("click", () => {
    spanEl.textContent = 0;
    counterValue = 0;
});
