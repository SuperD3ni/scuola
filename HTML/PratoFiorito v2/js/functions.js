let numRows = 16; // Numero di righe
let numCols = 16; // Numero di colonne
let grid = [];
let numBombs = 40; // Numero di bombe
let bombsLoc = [];
let uncoveredDivs = [];
let flag = false;

function start(){
    createGrid();
    createButtons()
    addBombs();
}

function createButtons(){ // Crea bottoni
    let flagButton = document.createElement("div");
    let resetButton = document.createElement("div");
    flagButton.id = "flag";
    resetButton.id = "reset";
    let parent = document.getElementById("buttons");
    parent.appendChild(flagButton);
    parent.appendChild(resetButton);
    flagButton.textContent = "Modalita' Bandiera";
    resetButton.textContent = "Ricomincia";
    flagButton.className = "button";
    resetButton.className = "button";
    flagButton.addEventListener("click", toggleFlag);
    resetButton.addEventListener("click", reset);
}

function createGrid(){ // Crea le caselle
    let n = 0;
    for (let i = 0; i < numRows; i++) {
        grid[i] = [];
        for (let j = 0; j < numCols; j++) {
            n++;
            let newDiv = document.createElement("div");
            newDiv.id = n;
            newDiv.className = "grid";
            let parent = document.getElementById("grid");
            parent.appendChild(newDiv);
            grid[i][j] = n; // Assegna valore
            newDiv.addEventListener("click", uncover);
        }
    }
    for (let i = 0; i < numRows; i++) {

        const row = new Array(numCols).fill(false);
      
        uncoveredDivs.push(row);
      
      }
    console.log(grid)
    return 0;


}

function addBombs(){ // Mette le bombe
    let usedNumbers = {}; // Utilizzo un literal per salvare quali numeri sono gia' stati usati in modo che i numeri casuali siano tutti diversi
    while(bombsLoc.length < numBombs){
        let r = Math.floor(Math.random() * numRows * numCols) + 1;
        if (!usedNumbers[r]) {
            bombsLoc.push(r);
            usedNumbers[r] = true;
        }
}
console.log(bombsLoc)
}

function uncover(event){ // Controlla la scoperta delle caselle
    let div = event.target;
    if (flag == false){
        let bombs = countBombs(div.id);
            if (bombs > 0){
                div.textContent = bombs;
                div.style.color = "black";
                div.style.backgroundColor = "white";
            } else {
                div.style.backgroundColor = "white";
                uncoverArea(div.id);
            }
            if (!bombsLoc.every(element=>element!=div.id)){
                div.textContent = 'O';
                div.style.color = "black";
                div.style.backgroundColor = "white";
                gameOver();
            }
            for (let i = 0; i < numRows; i++){
                for (let j = 0; j < numCols; j++){
                    if (grid[i][j] == div.id){
                        uncoveredDivs[i][j] = true
                    }
                    
                }
            }
    } else {
        if (div.textContent == ""){
            div.textContent = "F";
            div.style.color = "black";
        } else if (div.textContent == "F"){
            div.textContent = "";
            div.style.color = "transparent";
        }
    }

}


function countBombs(pos){ // Conta quante bombe ci sono attorno la casella selezionata
    let bombs = 0;
    for (let i = 0; i < numRows; i++){
        for (let j = 0; j < numCols; j++){
            if (grid[i][j] == pos){
                bombsLoc.forEach(element=>{
                    if (i != 0){
                        if (element == grid[i-1][j]){
                            bombs++;
                        }
                    }
                    if (i != numRows-1){
                        if (element == grid[i+1][j]){
                            bombs++;
                        }
                    }
                    if (j != 0){
                        if (element == grid[i][j-1]){
                            bombs++;
                        }
                    }
                    if (j != numCols-1){
                        if (element == grid[i][j+1]){
                            bombs++;
                        }
                    }
                    if (i != 0 && j != 0){
                        if (element == grid[i-1][j-1]){
                            bombs++;
                        }
                    }
                    if (i != 0 && j != numCols-1){
                        if (element == grid[i-1][j+1]){
                            bombs++;
                        }
                    }
                    if (i != numRows-1 && j != 0){
                        if (element == grid[i+1][j-1]){
                            bombs++;
                        }
                    }
                    if (i != numRows-1 && j != numCols-1){
                        if (element == grid[i+1][j+1]){
                            bombs++;
                        }
                    }
                })
            }
        }
    }
    return bombs;
}

function uncoverArea(pos){ // Scopre le caselle attorno alla casella selezionata
    let div;
    for (let i = 0; i < numRows; i++){
        for (let j = 0; j < numCols; j++){
            if (grid[i][j] == pos){
                if (i != 0){
                    if (uncoveredDivs[i-1][j] == false){
                        uncoveredDivs[i-1][j] = true
                        div = document.getElementById(grid[i-1][j])
                            let bombs = countBombs(grid[i-1][j]);
                            if (bombs > 0){
                                div.textContent = bombs;
                                div.style.color = "black";
                                div.style.backgroundColor = "white";
                        } else {
                            div.style.backgroundColor = "white";
                            uncoverArea(grid[i-1][j]);
                        }
                    }
                }
                if (i != numRows-1){
                    if (uncoveredDivs[i+1][j] == false){
                        uncoveredDivs[i+1][j] = true
                        div = document.getElementById(grid[i+1][j])
                        let bombs = countBombs(grid[i+1][j]);
                        if (bombs > 0){
                            div.textContent = bombs;
                            div.style.color = "black";
                            div.style.backgroundColor = "white";
                        } else {
                            div.style.backgroundColor = "white";
                            uncoverArea(grid[i+1][j]);
                        }
                    }
                }
                if (j != 0){
                    if (uncoveredDivs[i][j-1] == false){
                        uncoveredDivs[i][j-1] = true
                        div = document.getElementById(grid[i][j-1])
                        let bombs = countBombs(grid[i][j-1]);
                        if (bombs > 0){
                            div.textContent = bombs;
                            div.style.color = "black";
                            div.style.backgroundColor = "white";
                        } else {
                            div.style.backgroundColor = "white";
                            uncoverArea(grid[i][j-1]);
                        }
                    }
                    
                }
                if (j != numCols-1){
                    if (uncoveredDivs[i][j+1] == false){
                        uncoveredDivs[i][j+1] = true
                        div = document.getElementById(grid[i][j+1])
                        let bombs = countBombs(grid[i][j+1]);
                        if (bombs > 0){
                            div.textContent = bombs;
                            div.style.color = "black";
                            div.style.backgroundColor = "white";
                        } else {
                            div.style.backgroundColor = "white";
                            uncoverArea(grid[i][j+1]);
                        }
                    }    
                }
                if (i != 0 && j != 0){
                    if (uncoveredDivs[i-1][j-1] == false){
                        uncoveredDivs[i-1][j-1] = true
                        div = document.getElementById(grid[i-1][j-1])
                        let bombs = countBombs(grid[i-1][j-1]);
                        if (bombs > 0){
                            div.textContent = bombs;
                            div.style.color = "black";
                            div.style.backgroundColor = "white";
                        } else {
                        div.style.backgroundColor = "white";
                        uncoverArea(grid[i-1][j-1]);
                        }
                    }
                    
                }
                if (i != 0 && j != numCols-1){
                    if (uncoveredDivs[i-1][j+1] == false){
                        uncoveredDivs[i-1][j+1] = true
                        div = document.getElementById(grid[i-1][j+1])
                        let bombs = countBombs(grid[i-1][j+1]);
                        if (bombs > 0){
                            div.textContent = bombs;
                            div.style.color = "black";
                            div.style.backgroundColor = "white";
                        } else {
                        div.style.backgroundColor = "white";
                        uncoverArea(grid[i-1][j+1]);
                        }
                    }
                }
                if (i != numRows-1 && j != 0){
                    if (uncoveredDivs[i+1][j-1] == false){
                        uncoveredDivs[i+1][j-1] = true
                        div = document.getElementById(grid[i+1][j-1])
                        let bombs = countBombs(grid[i+1][j-1]);
                        if (bombs > 0){
                            div.textContent = bombs;
                            div.style.color = "black";
                            div.style.backgroundColor = "white";
                        } else {
                            div.style.backgroundColor = "white";
                            uncoverArea(grid[i+1][j-1]);
                        }
                    }
                    
                }
                if (i != numRows-1 && j != numCols-1){
                    if (uncoveredDivs[i+1][j+1] == false){
                        uncoveredDivs[i+1][j+1] = true
                        div = document.getElementById(grid[i+1][j+1])
                        let bombs = countBombs(grid[i+1][j+1]);
                        if (bombs > 0){
                            div.textContent = bombs;
                            div.style.color = "black";
                            div.style.backgroundColor = "white";
                        } else {
                            div.style.backgroundColor = "white";
                            uncoverArea(grid[i+1][j+1]);
                        }
                    }
                }
            }
        }
    }
}

function gameOver(){ // Controlla il Game Over
    let divs = Array.from(document.getElementsByClassName("grid"));
    divs.forEach(div=>{
        let bombs = countBombs(div.id);
        if (bombs > 0){
            div.textContent = bombs;
            div.style.color = "black";
            div.style.backgroundColor = "white";
        } else {
            div.style.backgroundColor = "white";
        }
        bombsLoc.forEach(element=>{
            if (element == div.id){
                div.textContent = 'O';
                div.style.color = "black";
                div.style.backgroundColor = "white";
            }
    })
})
}

function toggleFlag(event){ // Controlla il bottone della modalita' bandiera
    flagButton = event.target;
    if (flag == false){
        flag = true;
        flagButton.style.backgroundColor = "brown";
    } else {
        flag = false;
        flagButton.style.backgroundColor = "red";
    }
}

function reset(){ // Controlla il bottone di reset
    let divs = Array.from(document.getElementsByClassName("grid"));
    divs.forEach(div=>{
        document.getElementById("grid").removeChild(div);
    })
    bombsLoc = []
    uncoveredDivs = [];
    createGrid();
    addBombs();
}

document.addEventListener("DOMContentLoaded", start); // Ascoltatore iniziale