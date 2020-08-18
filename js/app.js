//Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);

//Functions
function addTodo(event){
  //prevent the form from submitting and the window refreshing
  event.preventDefault();
  //creating todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo'); //creating a class in the todoDiv
  //create Li
  const newTodo =document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //creating completed check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check-square"></i>';
  completedButton.classList.add('completed-btn');
  todoDiv.appendChild(completedButton);
  //creating delete or trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  //Append to list
  todoList.appendChild(todoDiv);

  //Clear todoInput Value
  todoInput.value = "";

 
}

function deleteCheck(e){
  const item = e.target;
  //Delete Todo
  if (item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    todo.remove();
  }
  //check mark completed items
  if(item.classList[0] === "completed-btn"){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
    console.log('heooosdf');
  }

}
