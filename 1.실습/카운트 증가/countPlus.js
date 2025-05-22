const countBtn = document.getElementById("countBtn");
let count = 0;

countBtn.addEventListener("click", function(){
    count++;
    countBtn.innerText = `클릭 횟수 : ${count}`;
})