
const elMenuBtn = document.querySelector("#menu-tlacitko")
const elMenuPolozky = document.querySelector("#menu-polozky")
const elMenuIcon = document.querySelector(".navbar-toggler i")



elMenuBtn.addEventListener("click", () => {
    elMenuPolozky.classList.toggle("show")
    elMenuIcon.classList.toggle("fa-xmark")    
})


