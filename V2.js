//V2 - reqs

var todos = ['item 1','item 2','item3']

//it should have a function to display toods
function displayTodos(){
  console.log("My Todos: " + todos);  
}
//it should have a function to add new todos
function addTodo(todo){
    todos.push(todo);
    displayTodos();
}
//it should have a function to change a todo
function changeTodo(position, newValue){
    todos(position) = newValue;
    displayTodos();
}
//it should have a function to delete a todo
function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos();
}