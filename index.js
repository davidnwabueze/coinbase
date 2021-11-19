const bar = document.querySelector(".bar");
const nav = document.querySelector(".nav");
const b = document.getElementsByClassName("nav");
let color = "none";
bar.addEventListener('click',function(){
    nav.classList.toggle("nav-open");
    
   document.querySelector(".body").style.display = color;

})