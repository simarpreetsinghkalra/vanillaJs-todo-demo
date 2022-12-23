const todoName = document.getElementById("todo-name");
const todoList = document.getElementById("todo-list");

const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(todoName.value);
  renderTodos();
});

const renderTodos = () => {
  todoList.innerHTML = "";
  todos.forEach((todo, i) => {
    const todoCard = document.createElement("div");
    todoCard.classList.add("card", "mb-2");
    todoCard.innerHTML = `
            <div class="align-items-center card-body d-flex justify-content-between">
                <h5 class="card-title">${todo}</h5>
                <button id="remove-todo" data-todo-id=${i} class="btn btn-danger">
                    <span class="material-icons">
                        delete
                    </span>
                </button>
            </div>
        `;
    todoList.appendChild(todoCard);
    // register delete button for remove-todo
    const removeTodoButton = todoCard.querySelector("#remove-todo");
    removeTodoButton.addEventListener("click", (event) => {
      const todo = event.target.dataset.todoId;
      deleteTodo(todo);
      renderTodos();
    });
  });
};

renderTodos();
