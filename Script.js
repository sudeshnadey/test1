const bars = document.querySelector(".bars");
const sidebar = document.querySelector(".sidebar");

bars.addEventListener("click",function(){
    bars.classList.toggle("barsleft")
    sidebar.classList.toggle("display")
})