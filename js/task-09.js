function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const button = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

button.addEventListener("click", () => {
    bodyEl.style.background = getRandomHexColor();
    currentColor.textContent = getRandomHexColor();
});
