const bars = document.querySelector(".fa-bars")
var container = document.querySelector("div.nav-col-item")

bars.addEventListener("click", function() {
    container.classList.toggle("toogle")
})