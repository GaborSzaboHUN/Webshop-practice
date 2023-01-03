const hamburgerMenu = document.getElementById("hamburger-menu")
const nav = document.getElementById("nav")

/* - - - - Open / Close hamburger menu - - - - */
hamburgerMenu.addEventListener("click", function () {
    nav.classList.toggle("menu-active")
    hamburgerMenu.classList.toggle("fi-x")
})
