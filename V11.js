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
        this.todos.forEach(function(todo){
            if(todo.isCompleted === true){
                completedTodos++;
            }
        });

        //if everything is true make them false
        this.todos.forEach(function(todo){
            if(completedTodos === totalTodos){
                todo.isCompleted = false;
            }
            else{
                todo.isCompleted = true;
            }
        });
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
    deleteTodo: function(position){
        todoList.deleteTodo(position);
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
        debugger;
        var todoUl = document.querySelector('ul');
        todoUl.innerHTML = '';

        todoList.todos.forEach(function(todo, position){
            var todoLi = document.createElement('li');
            var todoTextWithCompletion = '';
            if(todo.isCompleted === true){
                todoTextWithCompletion = '(x) ' + todo.todoText;
            }
            else{
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todoUl.appendChild(todoLi);
        }, this)
    },
    createDeleteButton: function(){
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton'
        return deleteButton;
    },
    prepEventListeners: function(){
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function(event) {
        
            var elementClick = event.target;
        
            if(elementClick.className === 'deleteButton'){

                handlers.deleteTodo(parseInt(elementClick.parentNode.id));
            }
        });
    }
};
view.prepEventListeners();
