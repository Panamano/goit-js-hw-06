const numberOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach(i => {
console.log(`Category: ${i.firstElementChild.textContent}`);
console.log(`Elements: ${i.lastElementChild.children.length}`);
});
