//Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(event){
  //prevent the form from submitting and the window refreshing
  event.preventDefault();
  //creating todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo'); //creating a class in the todoDiv

 
}
