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

const allGrid = document.querySelectorAll(".grid-element")

allGrid.forEach(element => element.addEventListener("mouseover", changeColor, {
    capture: true,
    once: true
    }
))