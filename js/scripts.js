//seleção de elementos
const todoForm = document.querySelector("todo-form") //primeiro campo 
const todoInput = document.querySelector("todo-Input") //Campo "o que você vai fazer?"
const todoList = document.querySelector("todo-list") //Campo de tarefas 
const editForm = document.querySelector("edit-form") //Segundo campo 
const editinput = document.querySelector("edit-input") //Campo de tarefas 2 
const cancelEditBtn = document.querySelector("cancel-edit-btn") 
const searchInput = document.querySelector("search-input") //Toolbar
const eraseBtn = document.querySelector("erase-button") //button toolbar
const filterBtn = document.querySelector("filter-select") //Campo de filtro

//Funções
const saveTodo =(text,done=0, save=1) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitlle = document.createElement("h3");
    todoTitlle.innerText = text;
    todo.appendChild(todoTitlle);
}



//Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();//faz com que o formulário não seja enviado quando pressionado o botão;não envia p o back;

     const inputValue = todoInput.value;
    
     if(inputValue){//validção p criar tarefas com titulos
       saveTodo(inputValue);//salar toDo
     }

});
