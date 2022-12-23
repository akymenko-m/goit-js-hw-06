const categoriesList = document.querySelector('#categories');
console.log('Number of categories:', categoriesList.children.length);

const categoriesItems = document.querySelectorAll('.item');
categoriesItems.forEach(el => {
    console.log('');
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
});