//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnChoiseOtherCookie = document.querySelector("#btnChoiseOtherCookie")
const openCookie = document.querySelector("#openCookie")

//Eventos
openCookie.addEventListener("click", changeScreen)
btnChoiseOtherCookie.addEventListener("click", changeScreen)

//Função
function changeScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

