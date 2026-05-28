const form = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const filter = document.querySelector("#todo-filter");
const content = document.querySelector(".content");
const contentBody = document.querySelector(".content-body");
const toastAlert = document.querySelector(".toast-alert");

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
  contentBody.addEventListener("click", deleteTodo)
}

function loadAllTodosToUI() {
  let todos = getTodosFromStorage();

  todos.forEach(function (todo) {
    const newCard = createCard(todo);
    todoList.appendChild(newCard);
  })
}
//---
function deleteTodo(e) {
  if (e.target.closest(".card-delete")) {
    const card = e.target.closest(".card-content");
    const todoText = card.querySelector(".card-text").textContent;

    card.remove();
    deleteTodoFormStorage(todoText);
    showAlert("success", "Card deleted");
  }
}

function deleteTodoFormStorage(deletetodo) {
  let todos = getTodosFromStorage();
  
  todos.forEach(function (todo, index) {
    if (todo === deletetodo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos",JSON.stringify(todos));
}
//--
function addTodoToStorage(newTodo) {

  let todos = getTodosFromStorage();

  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodosFromStorage() {

  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  return todos;
}
//--
function addTodo(e) {
  e.preventDefault();

  const newTodo = todoinput.value.trim();

  if (newTodo === "") {
    showAlert("danger", "Please, Write something first");
    return;
  }
  else {
    showAlert("success", "Note added successfully");
    addTodoToStorage(newTodo)
  }

  const newCard = createCard(newTodo);
  todoList.appendChild(newCard);
  todoinput.value = "";
  console.log(newTodo);
}
//

function createCard(newTodo) {
  const cardItem = document.createElement("article");
  cardItem.classList.add("card-content");

  const header = document.createElement("span");
  header.classList.add("card-header");

  const label = document.createElement("label");
  label.classList.add("checkbox-wrapper");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("card-checkbox");

  label.appendChild(checkbox);

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = "NOTE";

  const editBtn = document.createElement("button");
  editBtn.classList.add("card-edit");
  editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("card-delete");
  deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

  header.appendChild(label);
  header.appendChild(title);
  header.appendChild(editBtn);
  header.appendChild(deleteBtn);

  const text = document.createElement("p");
  text.classList.add("card-text");
  text.textContent = newTodo;

  cardItem.appendChild(header);
  cardItem.appendChild(text);

  return cardItem;
}


function showAlert(type, message) {
  const alert = document.createElement("div");

  alert.className = `alert alert-${type}`
  alert.textContent = message;

  toastAlert.appendChild(alert)

  requestAnimationFrame(() => {
    alert.classList.add("show");
  });


  setTimeout(() => {
    alert.classList.remove("show");

    setTimeout(() => {
      alert.remove();
    }, 400);
  }, 2000);
}







////// Category item active state
const items = document.querySelectorAll(".category-item");

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// To-Do item completed state
// const checkboxes = document.querySelectorAll(".card-checkbox");

// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener("change", (e) => {

//     const todoCompleted = e.currentTarget;
//     const checkboxBG = todoCompleted.closest(".card-content");

//     if (todoCompleted.checked) {
//       checkboxBG.style.backgroundColor = "var(--secondary-a30)";
//     } else {
//       checkboxBG.style.backgroundColor = "var(--primary-a30)";
//     }

//   });
// });

todoList.addEventListener("change", (e) => {
  if (!e.target.classList.contains("card-checkbox")) return;

  const card = e.target.closest(".card-content");

  if (e.target.checked) {
    card.style.backgroundColor = "var(--secondary-a30)";
  } else {
    card.style.backgroundColor = "var(--primary-a30)";
  }
});
