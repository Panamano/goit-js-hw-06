let counterValue = 0;
const buttonPlus = document.querySelector(`button[data-action="increment"]`);
const buttonMinus = document.querySelector(`button[data-action="decrement"]`);
const myValue = document.querySelector("#value");

const counterAdd = () => {
  counterValue += 1;
  myValue.textContent = counterValue;
};

const counterMinus = () => {
  counterValue -= 1;
  myValue.textContent = counterValue;
};

buttonPlus.addEventListener("click", counterAdd);
buttonMinus.addEventListener("click", counterMinus);
