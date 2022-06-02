const menu = document.getElementById("menu");
const navPages = document.getElementById("navpages");

menu.addEventListener("click", function() {
    navPages.classList.toggle("show");
});