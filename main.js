let home = document.querySelector(".div1")
let sort = document.querySelector(".div2")
let cook = document.querySelector(".cook")
let btn = document.querySelector(".btn")

cook.addEventListener('click', hide)
btn.addEventListener('click', hide)

function hide (){
    home.classList.toggle("hide")
    sort.classList.toggle("hide")
}


