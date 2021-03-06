var todoList  = {
    todos: [],
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            isCompleted: false,

        });
    },
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        },
    deleteTodo: function(position){
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.isCompleted = !todo.isCompleted;
    },
    toggleAll: function(){
        var totalTodos = this.todos.length;
        let completedTodos = 0;

        //Get number of completed todos
        for(var i = 0; i < totalTodos; i++){
            if(this.todos[i].isCompleted === true){
                completedTodos++;
            }
        }

        //if everything is true make them false
        if(completedTodos === totalTodos){
            for(var i = 0; i < totalTodos; i++){
                this.todos[i].isCompleted = false;
            }
        }
        else{
             for(var i = 0; i < totalTodos; i++){
                 this.todos[i].isCompleted = true;
                 }
             }
    }
};

var handlers = {
    /*displayTodos: function(){
        todoList.displayTodos();
    },*/
    addTodo: function(){
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function(){
        var changeTodoPosition = document.getElementById('changeTodoPosition');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoTextInput.value);
        changeTodoPosition.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function(){
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
        view.displayTodos();
    },
    toggleCompleted: function(){
        var toggleCompletedInput = document.getElementById('toggleCompletedInput')
        todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
        toggleCompletedInput.value = '';
        view.displayTodos();
    },
    toggleAll: function(){
        todoList.toggleAll();
        view.displayTodos();
    }
};

var view = {
    displayTodos: function (){
        var todoUl = document.querySelector('ul');
        todoUl.innerHTML = '';

        for(i = 0; i < todoList.todos.length; i++){
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];
            var todoTextWithCompletion = '';

            if(todo.isCompleted === true){
                todoTextWithCompletion = '(x) ' + todo.todoText;
            }
            else{
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion;
            todoUl.appendChild(todoLi);
        }
    }
}