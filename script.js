const gridContainer = document.getElementById("grid-container")
const slideContainer = document.querySelector(".selection-container")
const adjustSlider = document.getElementById("size-adjust")
const showSizeVal = document.getElementById("slider-counter")
const resetBtn = document.getElementById("reset")
const colorBtn = document.getElementById("color")


let initSize = 16
let allGrid
let gridDiv
let size = initSize
let shape
let highlight = "#305e8c"
let random = true

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
    showSizeVal.textContent = `${size} x ${size}`
}

displayGrid(size)

function changeColor() {
    if (random) {
        this.style.backgroundColor = randomColorMode()
    } else {
        this.classList.add("colored")
    }
}

function removeGridElements() {
    gridContainer.innerHTML = ""
    gridDiv.innerHTML = ""
}

function resetColor() {
    allGrid.forEach(element => element.classList.remove("colored"))
}

function changeBtnColor() {
    this.style.backgroundColor = highlight
    setTimeout(revertColor,200)
}

function revertColor() {
    resetBtn.style.backgroundColor =  "#30475E"
}

resetBtn.addEventListener("click", resetColor)
resetBtn.addEventListener("click", changeBtnColor)

adjustSlider.addEventListener("mousedown", () => (slideContainer.style.backgroundColor = highlight))
adjustSlider.addEventListener("mouseup", () => (slideContainer.style.backgroundColor = "#30475E"))
adjustSlider.addEventListener("change", (e)  => updateGrid(e.target.value))
adjustSlider.addEventListener("change", resetColor)

function updateGrid(newSize) {
    removeGridElements()
    displayGrid(newSize)
}

function randomColorMode() {
    let color = "#"
    let components = "ABCDEF0123456789"
    for (let i = 0; i < 6; i++) {
        color += components[Math.floor(Math.random() * 16)]
    }
    return color
}

colorBtn.addEventListener("mousedown", () => {
    colorBtn.style.backgroundColor = highlight
    setTimeout(function (){
        colorBtn.style.backgroundColor = "#30475E"
    }, 350)
})

