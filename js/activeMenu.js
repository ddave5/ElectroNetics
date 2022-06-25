const li = document.querySelectorAll(".menuItem");
const sec = document.querySelectorAll("section");

function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + window.innerHeight-200 < sec[len].offsetTop){
       
    }
    li.forEach((ltx) => ltx.classList.remove("activeMenu"));
    li[len].classList.add("activeMenu");
}

activeMenu();
window.addEventListener("scroll", activeMenu);