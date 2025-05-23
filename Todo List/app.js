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
            const i = btn.dataset.index; // dataset -> html 에 data- 로 전언된 부분 접근할때 사용
            todos.splice(i, 1); // splice (인덱스, 제거수, 등록할 내용[복수개 선언 가능])
            renderTodos(); // 렌더링
        });
    });
}

// 리스트 생성 버튼 이벤트
addBtn.addEventListener("click", () => {
    const todo = input.value.trim();
    if (todo) {
        todos.push(todo); // 배열에 값 넣기
        input.value = ""; // 입력창 초기화
        renderTodos(); // 랜더링
    }
})

// 입력창에서 엔터 누를시 버튼 이벤트 실행
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
})

renderTodos();
