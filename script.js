const container_sketch = document.querySelector(".container_sketch");
const dimensionButton = document.querySelector("button.dimensionButton");
const resetButton = document.querySelector("button.reset");

createGrids(10);


resetButton.addEventListener("click", function() {createGrids(10);})

dimensionButton.addEventListener( "click", function() {
    x = Number(prompt("please enter your dimension"));

    if ( isNaN(x) ) {
        alert("you should enter a number");
        return;
    } else if (x === 0) {
        alert("you can't enter zero or nothing");
        return;
    } else if (x<1 || x>60) {
        alert("It should be between 1 and 60");
        return;
    } else {
        createGrids(x);
    }
} );



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
    boxes.forEach( (box) => box.addEventListener("mouseover", function() {this.classList.add("mouseover")} ));

}






