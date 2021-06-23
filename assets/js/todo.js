var todoInputEl = document.querySelector(".todo-input");
//Element Selectors
var todoButtonEl = document.querySelector(".todo-button");
var todoListEl = document.querySelector(".todo-list");
var filterOption = document.querySelector(".select-todos");


//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButtonEl.addEventListener("click", addTodos);
todoListEl.addEventListener("click", deleteItem);
filterOption.addEventListener("click", filterTodo);


//Functions
//Function to Add todo-items and to Generate todo item Elements
function addTodos(event){
    event.preventDefault();

    var todoDivEl = document.createElement("div");
    todoDivEl.classList.add("todo");
    todoListEl.appendChild(todoDivEl);

    var newTodoEl = document.createElement("li");
    newTodoEl.innerText = todoInputEl.value;
    newTodoEl.classList.add("todo-item");
    todoDivEl.appendChild(newTodoEl);
    saveLocalTodos(todoInputEl.value);

    var completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class= "fa fa-check-square"></i>';
    completedButton.classList.add("complete-button");
    todoDivEl.appendChild(completedButton);

    var trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class= " fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDivEl.appendChild(trashButton);

    todoInputEl.value = "";

}

//Function to Check and Delete todo Items
function deleteItem(event) {

    var item = event.target;
    
    if(item.classList[0] === "trash-button" || item.classList[0] === "fas"  ) {
        var todo = item.parentElement;
        todo.parentElement.remove();
        todo.remove();
        removeLocalTodos(todo);

    }
    if(item.classList[0] === "complete-button" || item.classList[0] === "fa" ){
     var todo = item.parentElement;
     var iParent = todo.parentElement;
     todo.classList.toggle("completed");
     iParent.classList.toggle("completed");

    }

}

//Function to Remove local-storage items
function removeLocalTodos(todo) {
    let savedToDo;
    if (localStorage.getItem("savedToDo") === null) {
        savedToDo = [];
    } else {
        savedToDo = JSON.parse(localStorage.getItem("savedToDo"));
    }
    const todoIndex = todo.children[0].innerText;
    savedToDo.splice(savedToDo.indexOf(todoIndex), 1);
    localStorage.setItem("savedToDo", JSON.stringify(savedToDo));
  }


//Function to Hold items in the Local Storage
  function saveLocalTodos(todo){
    let savedToDo;
    if(localStorage.getItem("savedToDo") === null){
        savedToDo= [];
    }else {
        savedToDo= JSON.parse(localStorage.getItem("savedToDo"));
    }
    savedToDo.push(todo);
    localStorage.setItem("savedToDo",JSON.stringify(savedToDo));
    
}

//Function to Implement Todo list items 
function getTodos() {
    let savedToDo;
    if (localStorage.getItem("savedToDo") === null) {
        savedToDo = [];
    } else {
        savedToDo = JSON.parse(localStorage.getItem("savedToDo"));
    }
    savedToDo.forEach(function(todo) {
      //Create todo div
      const todoDivEl = document.createElement("div");
      todoDivEl.classList.add("todo");
      //Create list
      const newTodoEl = document.createElement("li");
      newTodoEl.innerText = todo;
      newTodoEl.classList.add("todo-item");
      todoDivEl.appendChild(newTodoEl);
      todoInputEl.value = "";
      //Create Completed Button
      var completedButton = document.createElement("button");
      completedButton.innerHTML = '<i class= "fa fa-check-square"></i>';
      completedButton.classList.add("complete-button");
      todoDivEl.appendChild(completedButton);
      //Create trash button
      const trashButton = document.createElement("button");
      trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
      trashButton.classList.add("trash-btn");
      todoDivEl.appendChild(trashButton);
      //attach final Todo
      todoListEl.appendChild(todoDivEl);
    });
}

//Function to Filter todo items as done, all, in progress
  function filterTodo(e) {
    const savedToDo = todoListEl.childNodes;
    savedToDo.forEach(function(todo) {
      switch (e.target.value) {
        case "total":
          todo.style.display = "flex";
          break;
        case "done":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "in-progress":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }


