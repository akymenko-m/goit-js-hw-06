function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector(".input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

inputNumber.addEventListener("input", getValue);
buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function getValue() {
    const value = Number(inputNumber.value);
    return value;
}

function createBoxes(num) {
    num = getValue();
    let sizeBox = 20;

    // variant1
    const newBoxesArr = [];
    for (let i = 1; i <= num; i += 1) {
        sizeBox += 10;
        const box = document.createElement("div");
        box.style.width = sizeBox + "px";
        box.style.height = sizeBox + "px";
        box.style.backgroundColor = getRandomHexColor();
        newBoxesArr.push(box);
    }
    boxes.append(...newBoxesArr);

    // variant2
    // let newBox = "";
    // for (let i = 1; i <= num; i += 1) {
    //     newBox += `<div style = 'width: ${sizeBox + i * 10}px; height: ${
    //         sizeBox + i * 10
    //     }px; background-color: ${getRandomHexColor()}'></div>`;
    // }
    // boxes.innerHTML += newBox;
}

function destroyBoxes() {
    boxes.innerHTML = "";
    inputNumber.value = "";
}
