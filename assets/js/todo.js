//Element Selectors
var todoInputEl = document.querySelector(".todo-input");
var todoButtonEl = document.querySelector(".todo-button");
var todoListEl = document.querySelector(".todo-list");

//Event Listeners
todoButtonEl.addEventListener("click", addTodos);
todoListEl.addEventListener("click", deleteItem);


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
    completedButton.innerHTML = '<i class= "fas fa-check-square"></i>';
    completedButton.classList.add("complete-button");
    todoDivEl.appendChild(completedButton);

    var trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class= " fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDivEl.appendChild(trashButton);

    todoInputEl.value = "";


}


function deleteItem(event) {

    var item = event.target;
    if(item.classList[0] === "trash-button") {
        var todo = item.parentElement;
        todo.remove();
    }
    if(item.classList[0] === "complete-button"){
     var todo = item.parentElement;
     todo.classList.toggle("completed");
    }

}