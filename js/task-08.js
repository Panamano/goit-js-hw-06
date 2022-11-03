const form = document.querySelector(".login-form");

const LoginData = (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all fields");
  } else {
    const loginInfo = { email: email.value, password: password.value };
    console.log(loginInfo);
  }
  e.currentTarget.reset();
};

form.addEventListener("submit", LoginData);
