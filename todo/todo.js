class LocalStorage {
    #keyName;
    constructor(keyName) {
        this.#keyName = keyName;
    }
    getitem() {
        const items = localStorage.getItem(this.#keyName);
        return items ? JSON.parse(items) : [];
    }
    setitem(itemList) {
        localStorage.setItem(this.#keyName, JSON.stringify(itemList));
    }
}

class DOM {
    create(type, textContent, ...classNames) {
        const item = document.createElement(type);
        classNames.length && (item.className = classNames.join(" "));
        item.textContent = textContent;
        return item;
    }
}


class Item {
    constructor(id, text) {
        this.id = id;
        this.text = text
    }
}

class todoItem extends Item {
    constructor(id, text, completed = false) {
        super(id, text);
        this.completed = completed;
    }
}


class TodoApp {
    constructor() {
        this.dom = new DOM();
        this.todoStorage = new LocalStorage("todos");
        this.todoList = this.todoStorage.getitem();
        this.todoInput = document.querySelector("[data-todo-input]");
        this.todoContainer = document.querySelector("[data-todo-container]");
        this.bindEvents();
        this.render();
    }

    addTodo(text) {
        const newTodo = new todoItem(Date.now(), text, false);
        this.todoList.push(newTodo);
        this.todoStorage.setitem(this.todoList);
        this.render();
    }
    removeTodo(id) {
        this.todoList = this.todoList.filter(todo => todo.id !== id);
        this.todoStorage.setitem(this.todoList);
        this.render();
    }
    toggleTodo(id) {
        const todo = this.todoList.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.todoStorage.setitem(this.todoList);
            this.render();
        }
    }

    bindEvents() {
        this.todoInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && e.target.value.trim()) {
                this.addTodo(e.target.value.trim());
                this.todoInput.value = "";
            }
        })
        this.todoContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("remove-button")) {
                const id = Number(e.target.dataset.id)
                this.removeTodo(id);
            }
            else if (e.target.classList.contains("todo-item")) {
                const id = Number(e.target.dataset.id);
                this.toggleTodo(id);
            }
        })

    }
    render() {
        this.todoContainer.innerHTML = "";
        this.todoList.forEach(todo => {
            const todoItem = this.dom.create("div", "", "todo-item", todo.completed ? "completed" : "");
            todoItem.dataset.id = todo.id;
            const todoText = this.dom.create("span", todo.text);
            const removeBtn = this.dom.create("button", "удалить", "remove-button");
            removeBtn.dataset.id = todo.id;
            removeBtn.disabled = !todo.completed;
            todoItem.appendChild(todoText);
            todoItem.append(removeBtn);
            this.todoContainer.appendChild(todoItem);
        })
    }
}

new TodoApp();