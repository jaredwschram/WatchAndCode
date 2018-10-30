var todoList  = {
    todos: [],
    displayTodos: function(){
        console.log("My todos:");
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
        this.todos.splice[position, 1];
        this.displayTodos();
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.isCompleted = !todo.isCompleted;
        this.displayTodos();
    }
};