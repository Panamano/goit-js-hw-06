const input = document.querySelector("#validation-input");
const ifBlur = (e) => {
  const inputColor = e.currentTarget;
  const inputLength = Number(inputColor.dataset.length);
  if (inputColor.value.length === inputLength) {
    inputColor.classList.remove("invalid");
    inputColor.classList.add("valid");
  } else {
    inputColor.classList.remove("valid");
    inputColor.classList.add("invalid");
  }
  // console.log(inputColor);
};

input.addEventListener("blur", ifBlur);
