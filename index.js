// Validate input field
const btnClicked = document.querySelector(".custom-btn");
const field = document.querySelector(".custom-field");
const emailInput = document.querySelector(".custom-input");

btnClicked.addEventListener("click", (event) => {
  const value = emailInput.value;

  const errorText = document.createElement("span");
  errorText.setAttribute("class", "error");

  if (value.length === 0 || !/(.+)@(.+){2,}\.(.+){2,}/.test(value)) {
    emailInput.style.borderColor = "red";

    if (value.length === 0) {
      errorText.textContent = "Email field cannot be empty";
    } else if (!/(.+)@(.+){2,}\.(.+){2,}/.test(value)) {
      errorText.textContent = "Please, enter valid email";
    }
  }

  field.appendChild(errorText);
  //   emailInput.focus();
});

emailInput.addEventListener("keydown", () => {
  const span = document.querySelector(".error");

  if (span === null) return;
  emailInput.removeAttribute("style");
  if (span.parentNode) {
    span.parentNode.removeChild(span);
  }
});
