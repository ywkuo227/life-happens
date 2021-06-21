//Element Selectors
var todoInputEl = document.querySelector(".todo-input");
var todoButtonEl = document.querySelector(".todo-button");
var todoListEl = document.querySelector(".todo-list");

//Event Listeners
todoButtonEl.addEventListener("click", addTodos);
todoListEl.addEventListener("click", deleteItem);

var savedToDo = [];

//Functions
function addTodos(event){
    event.preventDefault();

    var todoDivEl = document.createElement("div");
    todoDivEl.classList.add("todo");
    todoListEl.appendChild(todoDivEl);

    var newTodoEl = document.createElement("li");
    newTodoEl.innerText = todoInputEl.value;
    newTodoEl.classList.add("todo-item");
    todoDivEl.appendChild(newTodoEl);

    
    var completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class= "fa fa-check-square"></i>';
    completedButton.classList.add("complete-button");
    todoDivEl.appendChild(completedButton);

    var trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class= " fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDivEl.appendChild(trashButton);

    todoInputEl.value = "";
    saveLocalTodos(newTodoEl.textContent);


}


function deleteItem(event) {

    var item = event.target;
    
    if(item.classList[0] === "trash-button" || item.classList[0] === "fas"  ) {
        var todo = item.parentElement;
        todo.parentElement.remove();
        todo.remove();
    }
    if(item.classList[0] === "complete-button" || item.classList[0] === "fa" ){
     var todo = item.parentElement;
     var iParent = todo.parentElement;
     todo.classList.toggle("completed");
     iParent.classList.toggle("completed");

    }

}



function saveLocalTodos(todo){
    
    savedToDo.push(todo);
    localStorage.setItem("savedToDo",JSON.stringify(savedToDo));

}