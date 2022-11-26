const form = document.querySelector("form");
let listTodo = document.getElementById("list");
let input = document.getElementById("item");

/* fonction de suppression d'un todo */
const removeTodo = ((e) => {
    if (e.target.classList.contains("checked")) {
        e.target.remove();
        localStorage.maTodoList = listTodo.innerHTML;
    }
    else {
        e.target.classList.add("checked");
    };
})

/* addition d'un todo */
const addTodo = ((todo) => {
    listTodo.innerHTML += "<li>" + todo + "</li>";
    todo = "";
    localStorage.maTodoList = listTodo.innerHTML;
})

if (localStorage.maTodoList) {
    listTodo.innerHTML = localStorage.maTodoList;
}

listTodo.addEventListener('click',(e) => {
     removeTodo(e);
})

form.addEventListener('submit',(e) => {
    e.preventDefault();
    if (input.value) addTodo(input.value);
    input.value = "";
})