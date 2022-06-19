const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLogingSubmit(event) {
  event.preventDefault();
  console.dir(event);
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  alert("clicked!");
}

loginForm.addEventListener("submit", onLogingSubmit);

link.addEventListener("click", handleLinkClick);
