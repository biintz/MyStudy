const todos = [];
const list = document.getElementById("todoList");
const input = document.getElementById("listInput");
const addBtn = document.getElementById("addBtn");

function renderTodos() {
    list.innerHTML = ""; // 리스트 초기화
    todos.forEach((todo, index) => { // 단순 순회하며 태그 생성
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox"/>
            <span>${todo}</span>
            <button class="deleteBtn" data-index="${index}">삭제</button>
        `;
        list.appendChild(li); // 리스트의 맨 밑에 생성
    });

    // 리스트 안에 삭제버튼 이벤트 생성
    document.querySelectorAll(".deleteBtn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const i = btn.dataset.index;
            todos.splice(i, 1); // splice (인덱스, 제거수, 등록할 내용[복수개 선언 가능])
            renderTodos(); // 렌더링
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
