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

    // console.log(numRows, " ", numCols);
}

// Add a column
function addC() {
    numCols++;
    let table = document.getElementById("grid");
    
    for(let i = 0; i < numRows; i++) {
        table.rows[i].insertCell(numCols-1);
    }

    // console.log(numRows, " ", numCols);
}

// Remove a row
function removeR() {
    if(numRows > 0) numRows--;
    let table = document.getElementById("grid");
    table.deleteRow(numRows);

    // console.log(numRows, " ", numCols);
}

// Remove a column
function removeC() {
    if(numCols > 0) numCols--;
    let table = document.getElementById("grid");

    for(let i = 0; i < numRows; i++) {
        table.rows[i].deleteCell(numCols);
    }
    
    // console.log(numRows, " ", numCols);
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