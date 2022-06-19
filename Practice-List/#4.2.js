const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLogingSubmit(event) {
  event.preventDefault();
  console.dir(event);
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLogingSubmit);
