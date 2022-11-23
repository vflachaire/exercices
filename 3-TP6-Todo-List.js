
const inputTodo = document.querySelector("input");
const todoContainer = document.querySelector(".todo-container");
const form = document.querySelector("form");

/* pointer les éléments de la Todo List */
let todoList = [];


/* Fonction de suppression sur chaque Todo */
const removeTodo = (() => {
    console.log("removeTodo");
    todoList.forEach ((todo) => {
        todo.addEventListener("click", () => {
            console.log("click");
            if (todo.classList.contains("supprimer")) {
            alert("Voulez vous supprimer ce todo ?");
            todo.remove();
            }
            else todo.classList.add("supprimer");
        })
    })
})
       

/* Ajouter un élément à la liste */
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Enter");
    if (inputTodo.value) {
        let newTodo = document.createElement("li");
        newTodo.textContent = inputTodo.value;
        todoContainer.append(newTodo);
        todoList = document.querySelectorAll(".todo-container > li");
        console.log(todoList);
        inputTodo.value = "";
        removeTodo();
    }
    else {console.log("0");}
})


 

