
const colors = [
    "red", "orangered", "orange",
    "yellow", "yellowgreen", "lightgreen",
    "green", "mediumturquoise", "cyan",
    "lightskyblue", "blue", "darkblue",
    "navy", "purple", "mediumorchid",
    "violet", "pink", "lightgray",
    "gray", "black", "white"
]

let selectedColor = "black" // default color


const palette = document.getElementById("palette")
const canvas = document.getElementById("canvas")

//define canvas size, how many rows and colums I will have
const rows = 40
const cols = 60
const pixelSize = Math.floor(81 / cols) + "vw" // this ensures each pixel fits equally within the canvas (81vw) by rounding down to an integer using math fucntion



//to create the color palette
function createPalette() {
    const clearBtn = document.createElement("button")  // to create "Clear" button
    clearBtn.textContent = "Clear"
    clearBtn.style.width = "86%"
    clearBtn.style.padding = "10px"
    clearBtn.style.fontSize = "20px"
    clearBtn.style.cursor = "pointer"
    clearBtn.addEventListener("click", clearCanvas)
    palette.appendChild(clearBtn) // to add the button clear in the div palette

    //create color options
    for (let i = 0; i < colors.length; i++) {
        let colorDiv = document.createElement("div")
        colorDiv.style.backgroundColor = colors[i] //assigns to the each created div a backgroundColor based on the current color of the array
        colorDiv.style.width = "50px"
        colorDiv.style.height = "50px"
        colorDiv.style.cursor = "pointer"

        colorDiv.addEventListener("click", selectColorWithParam(colors[i]))

        function selectColorWithParam(color) {
            return function() {
                selectColor(color)
            }
        }
        palette.appendChild(colorDiv)
    }
}

//to select color
function selectColor(color) {
    selectedColor = color
}

//create the canvas
function createCanvas() {
    for (let i = 0; i < rows * cols; i++) {
        let pixel = document.createElement("div")
        pixel.style.width = pixelSize
        pixel.style.height = pixelSize
        pixel.style.outline = "1px solid lightgray" // it puts a border (outline) to maintain the visual grid.
        pixel.style.boxSizing = "border-box"
        pixel.style.backgroundColor = "white"

        //calls paintPixel()-> paints when clicked
        pixel.addEventListener("mousedown", paintPixel)

        //calls paintWhileDragging() -->paints when dragged
        pixel.addEventListener("mouseover", paintWhileDragging)

        canvas.appendChild(pixel)
    }
}

//to paint a pixel when clicked
function paintPixel(event) {
    event.target.style.backgroundColor = selectedColor
    isDrawing = true
}

//to paint while dragging
function paintWhileDragging(event) {
    if (isDrawing) {
        event.target.style.backgroundColor = selectedColor
    }
}

//clear the canvas
function clearCanvas() {
    let allPixels = document.querySelectorAll("#canvas div")
    for (let i = 0; i < allPixels.length; i++) {
        allPixels[i].style.backgroundColor = "white"
    }
}

//stop drawing when mouse is released
let isDrawing = false
document.body.addEventListener("mouseup", stopDrawing)

//to stop drawing
function stopDrawing() {
    isDrawing = false
}


createPalette()
createCanvas()
