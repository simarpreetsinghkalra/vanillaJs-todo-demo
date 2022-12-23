let todos = [];

const addTodo = (todoName) => {
  console.log(todoName);
  todos.push(todoName);
};

const deleteTodo = (todoIndex) => {
    console.log(typeof todoIndex);
    const tempTodos = [];
    for (let i=0;i<todos.length;i++){
       if(i!==todoIndex){
         tempTodos.push(todos[i]);  
       } 
    }
    todos = tempTodos;
   
    
};
