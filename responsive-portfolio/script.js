const ham = document.querySelector(".ham")
const links = document.querySelector(".links")

ham.addEventListener("click", () => {
  links.classList.toggle("show")
})
