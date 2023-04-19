const controlRange = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text");
textElem.style.fontSize = "56px";

controlRange.addEventListener("input", handleInputChange);

function handleInputChange(event) {
    let target = event.target;

    if (event.target.type !== "range") {
        target = document.getElementById("font-size-control");
    }
    const min = 4;
    const max = 100;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 96) / (max - min) + "% 100%";

    textElem.style.fontSize = `${event.currentTarget.value}px`;
}
