const inputName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

inputName.addEventListener("input", onCheckInputValue);

function onCheckInputValue(event) {
    if (event.currentTarget.value === "") {
        nameOutput.textContent = "Anonymous";
        return;
    }
    nameOutput.textContent = event.currentTarget.value;
}
