const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

function saveToDos() {
  // 배열을 string 으로 localStorage에 저장
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  console.log(this);
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  paintToDo(newToDo);
  toDos.push(newToDo);
  saveToDos();
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
