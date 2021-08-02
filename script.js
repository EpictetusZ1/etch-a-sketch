const gridContainer = document.querySelector(".grid-container")
let gridElement

const gridShape = 16 * 16

for (let i = 0; i < gridShape; i++) {
    gridElement = document.createElement('div')
    gridContainer.appendChild(gridElement).classList.add("grid-element")
}

function changeColor() {
    this.classList.add("colored")
}

function resetColor() {
    allGrid.forEach(element => element.classList.remove("colored"))
}

const allGrid = document.querySelectorAll(".grid-element")

allGrid.forEach(element => element.addEventListener("mouseover", changeColor))

const resetBtn = document.getElementById("reset")

function changeBtnColor() {
    this.style.backgroundColor = "#9ef6f2"
    setTimeout(revertColor,200)
}

function revertColor() {
    resetBtn.style.backgroundColor =  "#84CDCA"
}
resetBtn.addEventListener("click", resetColor)
resetBtn.addEventListener("click", changeBtnColor)

let gridSlider = document.getElementById("gridSet")

gridSlider.addEventListener("change", )
