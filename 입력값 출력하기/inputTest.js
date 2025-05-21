const input = document.getElementById("userInput");
const button = document.getElementById("showBtn");
const result = document.getElementById("resultBox");

button.addEventListener("click", function(){
    result.innerText = `입력한 이름은 : ${input.value}`;
});