function validateEmail(email) {
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

function validate() {
  let email = document.querySelector("#email");
  let message = email.nextElementSibling;

  !validateEmail(email.value)
    ? (message.classList.add("fa-error"),
      message.nextElementSibling.classList.add("message-error"))
    : (message.classList.remove("fa-error"),
      message.nextElementSibling.classList.remove("message-error"));
}

let submitBtn = document.getElementById("btn-submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validate();
});
