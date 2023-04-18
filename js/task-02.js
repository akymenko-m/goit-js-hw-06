const ingregientsList = document.querySelector("#ingredients");
const form = document.querySelector(".form");
const createBtn = document.querySelector(".btn-create");

const notyf = new Notyf();
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingregientsElements = ingredients.map((el) => {
    const createItem = document.createElement("li");
    createItem.textContent = el;
    createItem.classList.add("item");
    return createItem;
});

ingregientsList.append(...ingregientsElements);

let newList = [];

form.addEventListener("submit", addIngredient);
createBtn.addEventListener("click", createList);

function addIngredient(event) {
    event.preventDefault();
    const {
        elements: { ingredient },
    } = event.currentTarget;

    newList.push(ingredient.value);
    event.currentTarget.reset();
}

function createList() {
    if (!newList.length) {
        notyf.error("Your ingregients list empty");
        return;
    }
    const ingregientsElements = newList.map(
        (el) => `<li class="item">${el}</li>`
    );

    ingregientsList.innerHTML = ingregientsElements.join("");
    newList = [];
}
