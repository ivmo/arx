var menu = document.querySelector("#mmbtn");
var showlist = document.querySelector("#list");

menu.addEventListener("click", function(event) {
    // event.preventDefault();
    showlist.classList.toggle("m-menu-show");
  });
