const getResult = document.querySelector(".get-result");
const numCategories = document.querySelector(".num-categories");
const resultData = document.querySelector(".result-data");

const categoriesList = document.querySelector("#categories");
numCategories.textContent = categoriesList.children.length;
console.log("Number of categories:", categoriesList.children.length);

const categoriesItems = document.querySelectorAll(".categories-item");

categoriesItems.forEach((el) => {
    console.log("");
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);

    const markup = `<ul>
    <li class="list-item new"><b>Category:</b> ${el.firstElementChild.textContent}</li>
     <li class="list-item new"><b>Elements:</b> ${el.lastElementChild.children.length}</li>
    </ul>
    `;

    resultData.insertAdjacentHTML("beforeend", markup);
});

getResult.addEventListener("click", () => {
    resultData.classList.toggle("is-hidden");
});
