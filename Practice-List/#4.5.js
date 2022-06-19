const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLogingSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);

  localStorage.setItem("username", username);

  greeting.classList.remove("hidden");
  greeting.innerText = `Hello ${username}`;
}

loginForm.addEventListener("submit", onLogingSubmit);
