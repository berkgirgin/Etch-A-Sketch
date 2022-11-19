const container_sketch = document.querySelector(".container_sketch");
var isBlackOrColorOrDelete = "black_selected";

const resetButton = document.querySelector("button.reset");
resetButton.addEventListener("click", function() {
    createGrids(10);
    isBlackOrColorOrDelete = "black_selected";
});

const button10 = document.querySelector(".grid10");
button10.addEventListener("click", function() {createGrids(10)});

const button20 = document.querySelector(".grid20");
button20.addEventListener("click", function() {createGrids(20)});

const button30 = document.querySelector(".grid30");
button30.addEventListener("click", function() {createGrids(30)});

const button40 = document.querySelector(".grid40");
button40.addEventListener("click", function() {createGrids(40)});

const button50 = document.querySelector(".grid50");
button50.addEventListener("click", function() {createGrids(50)});

const button60 = document.querySelector(".grid60");
button60.addEventListener("click", function() {createGrids(60)});

const eraseButton = document.querySelector(".erase_button");
eraseButton.addEventListener("click", function() {isBlackOrColorOrDelete = "erase_selected";})

const blackMarker = document.querySelector(".black_marker");
blackMarker.addEventListener("click", function() {isBlackOrColorOrDelete = "black_selected";})

const colorMarker = document.querySelector(".color_marker");
colorMarker.addEventListener("click", function() {isBlackOrColorOrDelete = "color_selected";})


// setting up the start with 10x10 grid
createGrids(10);


function mouseoverFunc(x) {

    if (isBlackOrColorOrDelete === "black_selected") {
        x.setAttribute("style", "background-color: black;");
    } else if (isBlackOrColorOrDelete === "color_selected") {
        randomColor = randomColorGenerator();
        x.setAttribute("style", `background-color: ${randomColor};`);
    } else if (isBlackOrColorOrDelete === "erase_selected") {
        x.removeAttribute("style");
    }
}

function randomColorGenerator() {
    // create a random rgb color
    function generateRandomNumber() {
        // generate a random number between 1 and 255
        let result = Math.floor(Math.random() * 255) + 1;
        return result;
      }
    x = generateRandomNumber();  
    y = generateRandomNumber();  
    z = generateRandomNumber();  
    return `rgb(${x}, ${y}, ${z})`;
}


function createGrids(dimension) {

    const childrenOfContainer = document.querySelectorAll("div.container_sketch > div")
    childrenOfContainer.forEach(element => element.remove());

    container_sketch.setAttribute("style",
    `grid-template-columns: repeat(${dimension}, 1fr); grid-template-columns: repeat(${dimension}, 1fr)`
    );

    for (let i=0; i<dimension**2; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("box");
        container_sketch.appendChild(newDiv);
    } 

    const boxes = document.querySelectorAll(".box");
    boxes.forEach( (box) => box.addEventListener("mouseover", function() {mouseoverFunc(this);} ));

}






