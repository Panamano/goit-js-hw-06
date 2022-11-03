const input = document.querySelector("#controls>input");
const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (quantity) => {
  const boxesArray = [];

  for (let i = 0; i < quantity; i++) {
    const createBox = document.createElement("div");
    createBox.style.width = `${30 + 10 * i}px`;
    createBox.style.height = `${30 + 10 * i}px`;
    createBox.style.backgroundColor = getRandomHexColor();

    boxesArray.push(createBox);
  }

  boxes.append(...boxesArray);
};

const destroyBoxes = () => (boxes.innerHTML = "");

createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", destroyBoxes);
