var todoList  = {
    todos: [],
    displayTodos: function(){
        if(this.todos.length > 0){
            for(var i=0;i < this.todos.length;i++){
                if(this.todos[i].isCompleted === true){
                    console.log('(x) ' + this.todos[i].todoText);
                }
                else{
                    console.log('() ' + this.todos[i].todoText)
                }
            }
          }
        else{
            console.log("Your todo list is empty!")
        }
    },
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            isCompleted: false,

        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.isCompleted = !todo.isCompleted;
        this.displayTodos();
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
        this.displayTodos();
    }
};

var displayTodosButton = document.getElementById('displayTodosButton')

displayTodosButton.addEventListener('click',function(){
    todoList.displayTodos();
})

var toggleAllButton = document.getElementById('toggleAllButton')

toggleAllButton.addEventListener('click', function(){
    todoList.toggleAll();
})