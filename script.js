// Declare global variables
let numRows = 2;
let numCols = 3;
let colorSelected; 

// Add a row
function addR() {
    numRows++;
    let table = document.getElementById("grid");
    let row = document.createElement("tr");
    
    for(let i = 0; i < numCols; i++) {
        let cell = document.createElement("td");
        row.appendChild(cell);
    }
    
    table.appendChild(row);
}

// Add a column
function addC() {
    numCols++;
    let table = document.getElementById("grid");
    
    for(let i = 0; i < numRows; i++) {
        table.rows[i].insertCell(numRows);
    }
}

// Remove a row
function removeR() {
    numRows--;
    let table = document.getElementById("grid");
    table.deleteRow(numRows);
}

// Remove a column
function removeC() {
    numCols--;
    let table = document.getElementById("grid");

    for(let i = 0; i < numRows; i++) {
        table.rows[i].deleteCell(numRows);
    }
    
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}