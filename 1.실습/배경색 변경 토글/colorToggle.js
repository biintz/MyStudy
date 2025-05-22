const toggleBtn = document.getElementById("toggleBtn");
let isBlue = false;

toggleBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = isBlue ? "white" : "skyblue";
    isBlue = !isBlue;
})