const todos = [];
const list = document.getElementById("todoList");
const input = document.getElementById("listInput");
const addBtn = document.getElementById("addBtn");

function renderTodos() {
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox"/>
            <span>${todo}</span>
            <button class="deleteBtn" data-index="${index}">삭제</button>
        `;
        list.appendChild(li);
    });

    document.querySelectorAll(".deleteBtn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const i = btn.dataset.index;
            todos.splice(i, 1);
            renderTodos();
        });
    });
}

addBtn.addEventListener("click", () => {
    const todo = input.value.trim();
    if (todo) {
        todos.push(todo);
        input.value = "";
        renderTodos();
    }
})

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
})

renderTodos();