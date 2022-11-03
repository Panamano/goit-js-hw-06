const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");


const newElements = ingredients.map((ingredient) => {
  const newIngredient = document.createElement("li");
  newIngredient.textContent = ingredient;
  newIngredient.classList.add("item");
  return newIngredient;
});

list.append(...newElements);