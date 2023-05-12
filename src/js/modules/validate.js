import validator from "validator";

const email = document.getElementById("newsletter-email");
const submit = document.getElementById("newsletter-submit");

submit.addEventListener("click", () => {
  if (validator.isEmail(email.value) === false) {
    email.setCustomValidity("Введите email в формате: example@email.com");
  } else {
    email.setCustomValidity("");
  }
});

email.addEventListener("input", () => {
  if (validator.isEmail(email.value) === false) {
    email.setCustomValidity("");
  } else {
    email.setCustomValidity("");
  }
});
