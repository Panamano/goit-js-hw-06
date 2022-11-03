const input = document.querySelector("#name-input");
const helloSpan = document.querySelector("#name-output");

const newInput = (name) => {
  helloSpan.textContent = name.currentTarget.value;

  if (name.currentTarget.value === "") {
    helloSpan.textContent = "Anonymous";
  }
};
input.addEventListener("input", newInput);
