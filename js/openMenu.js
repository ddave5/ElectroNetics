let btn = document.querySelector("#navbar_menu_button");
let sidebar = document.querySelector("#sidebar");

document.onclick = function(e){
  if(e.target.id !== "sidebar" && e.target.id !== "navbar_menu_button"){
      sidebar.classList.remove("active");
  }
}


btn.onclick = function(){
  sidebar.classList.toggle("active");
}

