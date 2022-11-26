
const inputTodo = document.querySelector("input");
const todoContainer = document.querySelector(".todo-container");
const form = document.querySelector("form");

/* pointer les éléments de la Todo List */
let todoList = [];


/* Fonction d'ajout d'un Todo */
const addTodo = ((value) => {
    /* Insertion de lavaleur de l'Input dans le DOM */
    let newTodo = document.createElement("li");
    newTodo.textContent = inputTodo.value;
    todoContainer.append(newTodo);

    /* Mise à jour de la todoList */
    todoList = document.querySelectorAll(".todo-container > li");
    console.log(todoList);

    /* Ajour de la todoList dans le localStorage */
    // let todoListJson = JSON.stringify(Object.assign({},todoList));;
    // console.log(todoListJson);
    // localStorage.maTodoList = todoListJson;
    console.log(todoList.indexOf(newTodo));
    indexTodo = todoList.indexOf(newTodo);
    
    localStorage.indexTodo = newTodo;
    
    /* reset de l'input */
    inputTodo.value = "";
})

/* Fonction de suppression sur chaque Todo */
const removeTodo = (() => {
    console.log("removeTodo");
    todoList.forEach ((todo) => {
        todo.addEventListener("click", () => {
            if (todo.classList.contains("supprimer")) {
            alert("Voulez vous supprimer ce todo ?");
            todo.remove();
        }
        else {
            todo.classList.add("supprimer");
            window.localStorage.maBoite.removeItem("todo");
            }
        })
    })
})
       

/* Ajouter un élément à la liste */
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Enter");
    if (inputTodo.value) {
        addTodo(inputTodo.value);
        removeTodo();
    }
    else {console.log("0");}
})


 

