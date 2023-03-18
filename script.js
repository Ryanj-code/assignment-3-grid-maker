// Declare global variables
let numRows = 2;
let numCols = 3;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);

    let cell = document.querySelectorAll("td");
    console.log(cell);
    
    for(let i = 0; i < cell.length; i++) {
        cell[i].onclick = function () {
            cell[i].style.background = colorSelected;
        }    
    }
}

// Fill all uncolored cells
function fillU(){
    let cell = document.querySelectorAll("td");
    
    for(let i = 0; i < cell.length; i++) {
        if(!cell[i].style.background) cell[i].style.background = colorSelected;   
    }
}

// Fill all cells
function fillAll(){
    let cell = document.querySelectorAll("td");
    
    for(let i = 0; i < cell.length; i++) {
        cell[i].style.background = colorSelected;   
    }
}

// Clear all cells
function clearAll(){
    let cell = document.querySelectorAll("td");
    
    for(let i = 0; i < cell.length; i++) {
        cell[i].style.background = "";   
    }
}