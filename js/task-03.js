const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
    {
        url: "https://images.pexels.com/photos/215545/pexels-photo-215545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
    {
        url: "https://images.pexels.com/photos/219944/pexels-photo-219944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
    {
        url: "https://images.pexels.com/photos/219945/pexels-photo-219945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];

const galleryList = document.querySelector(".gallery");
const container = document.querySelector("#large-img");

const makeImagesElement = ({ url, alt } = {}) => {
    return `
    <li class="gallery-item">
      <img src="${url}" alt="${alt}">
    </li>
  `;
};

const imageCards = images.map((el) => {
    return makeImagesElement(el);
});

galleryList.insertAdjacentHTML("afterbegin", imageCards.join(""));

galleryList.addEventListener("click", showLargeImg);

let selectedImg = null;
function showLargeImg(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    }
    if (event.target === selectedImg) {
        container.innerHTML = "";
        return;
    }

    selectedImg = event.target;

    container.innerHTML = `<img src="${selectedImg.src}" alt="${selectedImg.alt}">`;
    container.scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
}
