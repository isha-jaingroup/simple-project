const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

const STORAGE_KEY = "simple-project-todos";

function loadTodos() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function renderTodos() {
    const todos = loadTodos();
    todoList.innerHTML = "";

    todos.forEach(function (todo, index) {
        const li = document.createElement("li");
        li.className = "todo-item" + (todo.done ? " done" : "");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.done;
        checkbox.addEventListener("change", function () {
            toggleTodo(index);
        });

        const span = document.createElement("span");
        span.textContent = todo.text;
        span.className = "todo-text";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "todo-delete-btn";
        deleteBtn.addEventListener("click", function () {
            deleteTodo(index);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

function addTodo() {
    const text = todoInput.value.trim();
    if (text === "") {
        return;
    }

    const todos = loadTodos();
    todos.push({ text: text, done: false });
    saveTodos(todos);

    todoInput.value = "";
    renderTodos();
}

function toggleTodo(index) {
    const todos = loadTodos();
    todos[index].done = !todos[index].done;
    saveTodos(todos);
    renderTodos();
}

function deleteTodo(index) {
    const todos = loadTodos();
    todos.splice(index, 1);
    saveTodos(todos);
    renderTodos();
}

addTodoBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTodo();
    }
});

renderTodos();
