const gridContainer = document.getElementById("grid-container")
const adjustSlider = document.getElementById("size-adjust")
const resetBtn = document.getElementById("reset")

let initSize = 16

let allGrid
let gridDiv
let size = initSize
let shape

function displayGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    shape = size * size
    for (let i = 0; i < shape; i++) {
        gridDiv = document.createElement('div')
        gridDiv.addEventListener("mouseover", changeColor)
        gridContainer.appendChild(gridDiv).classList.add("grid-element")
    }
    allGrid = document.querySelectorAll(".grid-element")
}

displayGrid(size)

function changeColor() {
    this.classList.add("colored")
}

function resetColor() {
    allGrid.forEach(element => element.classList.remove("colored"))
}

function changeBtnColor() {
    this.style.backgroundColor = "#9ef6f2"
    setTimeout(revertColor,200)
}

function revertColor() {
    resetBtn.style.backgroundColor =  "#84CDCA"
}

function removeGridElements() {
    gridContainer.innerHTML = ""
}

resetBtn.addEventListener("click", resetColor)
resetBtn.addEventListener("click", changeBtnColor)

adjustSlider.addEventListener("change", (e)  => updateGrid(e.target.value))
adjustSlider.addEventListener("change", resetColor)

function updateGrid(newSize) {
    removeGridElements()
    console.log(newSize)
    displayGrid(newSize)
}

