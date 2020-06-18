//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoCount = document.querySelector(".count");
//ToDo Count
var count = document.querySelectorAll(".todo-list .todo").length;
todoCount.innerText = count;

//Event Listners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
//Functions
function addTodo(event) {
  //Prevent form from Submiting
  event.preventDefault();
  //ToDo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  if (todoInput.value == "") {
    window.alert("Input Cannot be Empty");
    return;
  }
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Complete Button
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class = "fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);

  //Delete Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to list
  todoList.appendChild(todoDiv);
  todoInput.value = "";
  count = document.querySelectorAll(".todo-list .todo").length;
  todoCount.innerText = count;
}

function deleteCheck(e) {
  const item = e.target;
  // delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
    count = document.querySelectorAll(".todo-list .todo").length;
    todoCount.innerText = count;
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
