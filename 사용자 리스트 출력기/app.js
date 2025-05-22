const users = ["짱구", "철수", "맹구"];
const list = document.getElementById("userList");
const input = document.getElementById("nameInput");
const button = document.getElementById("addBtn");
const delet = document.getElementById("deleteName");

// 리스트를 화면에 렌더링하는 함수
function renderUsers() {
    list.innerHTML = ""; // 기존 리스트 초기화
    users.forEach((name) => {
        const li = document.createElement("li"); // ul 태그안에 들어갈 li 태그 생성
        li.innerText = `${name} 님`; // 배열에 있는 이름 순회
        list.appendChild(li); // 기존 리스트 밑에 추가
    });
}

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        button.click();
    }
})

// 버튼 클릭시 이름추가 화면 다시 렌더링
button.addEventListener("click", () => {
    const newName = input.value.trim(); // input 안에 텍스트 받아오기
    if (newName) {
        users.push(newName);
        input.value = "";
        renderUsers();
    }
});

// 버튼 클릭시 지정된 이름 삭제
delet.addEventListener("click", () => {
    const deleteName = input.value.trim();
    if (deleteName) {
    const filteredUsers = users.filter((name) => name !== deleteName);
    users.length = 0; // 기존 배열 초기화
    users.push(...filteredUsers); // 새 배열로 덮기 (재할당)
    input.value = "";
    renderUsers();
    }
})

// 초기 렌더링
renderUsers();