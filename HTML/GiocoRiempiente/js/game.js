export {gameView}
import { players } from "./functions.js";
import { scores } from "./functions.js";
import { navigate } from "./functions.js";

function gameView(){
    const fragment = document.createDocumentFragment();
    if (players.length < 2) {   // checks how many players there are
        const error = document.createElement('a');
        error.id = 'error';
        error.textContent = 'error: less than 2 players; add more players and retry';
        fragment.appendChild(error);
        return fragment
    } else if (players.length === 2) {
        startGame(players);
        return fragment;
    } else {

    }
    function startGame(selectedPlayers){
        const player1 = selectedPlayers[0];
        const player2 = selectedPlayers[1];
        let turn = player1;
        let score1 = 0;
        let score2 = 0;
        let gridMap = new Map();

        const gameDiv = document.createElement('div');

        const playersInGame = document.createElement('h1');
        gameDiv.appendChild(playersInGame);
        playersInGame.textContent = `${player1.nickname} VS ${player2.nickname}`;

        const currentPlayer = document.createElement('a');
        gameDiv.appendChild(currentPlayer);
        currentPlayer.textContent = turn.nickname;

        createGrid();

        const bar1 = document.createElement('div');
        const bar2 = document.createElement('div');
        bar1.id = 'bar';
        bar2.id = 'bar';
        gameDiv.appendChild(bar1);
        gameDiv.appendChild(bar2);
        for (let i = 0; i<25; i++){
            const div1 = document.createElement('div');
            const div2 = document.createElement('div');
            bar1.appendChild(div1);
            bar2.appendChild(div2);
            div1.className = 'bar';
            div2.className = 'bar';
        }

        let div1 = bar1.firstElementChild;
        let div2 = bar2.firstElementChild;

        fragment.appendChild(gameDiv);

        function createGrid(){
            const grid = document.createElement('div');
            grid.id = 'mainGrid';
            gameDiv.appendChild(grid);

            let numRows = 6;

            let numCols = 5;

            for (let i = 0; i < numRows; i++) {

               for (let j = 0; j < numCols; j++){
                    const cell = document.createElement('div');
                    gridMap.set(cell, {'num': Math.floor(Math.random() * 3) + 1, 'covered': true})
                    cell.addEventListener('click', uncover);
                    grid.appendChild(cell);
                }

            }

            let zerosPlaced = 0; // place zeros
            while (zerosPlaced < 3) {
                const key = Array.from(gridMap.keys())[Math.floor(Math.random() * numRows * numCols) + 1];
                if (gridMap.get(key)!=0){
                    gridMap.set(key, {'num': 0, 'covered': true})
                    zerosPlaced++;
                }
            }

            console.log(gridMap);
/*
            let gridMatrix = [];

            for (let i = 0; i < numRows; i++) {

                gridMatrix[i] = [];

               for (let j = 0; j < numCols; j++){
                    gridMatrix[i][j] = Math.floor(Math.random() * 3) + 1;
                }

            }

            let zerosPlaced = 0; // place zeros
            while (zerosPlaced < 3) {
                const row = Math.floor(Math.random() * 6);
                const col = Math.floor(Math.random() * 5);

                if (gridMatrix[row][col] !== 0) {
                    gridMatrix[row][col] = 0;
                    zerosPlaced++;
                }
            }

            gridMatrix.forEach(array=>{
                array.forEach(n=>{
                    const cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.dataset.number = n;
                    cell.addEventListener('click', uncover);
                    grid.appendChild(cell);
                })
            })


            console.log(gridMatrix);*/
        }

        function uncover(event){
            const cell = event.target;
            let cellValues = gridMap.get(cell);
            if (cellValues.covered){
                cellValues.covered = false;
                cell.style.backgroundColor = '#FFE6E1';
                cell.textContent = cellValues.num;
                if (cellValues.num > 0){
                    if (turn === player1){
                        score1 += cellValues.num;
                        for (let i=0; i<cellValues.num; i++){
                            setTimeout(() => { 
                            if (div1.nextElementSibling != null){
                                div1.className = 'barL';
                                div1 = div1.nextElementSibling;
                            } else {
                                while (div1.previousElementSibling != null){
                                div1.className = 'bar';
                                div1 = div1.previousElementSibling;
                                }
                                div1.className = 'bar';
                            }
                        }, 400 * i);
                        }
                        turn = player2;
                        currentPlayer.textContent = turn.nickname;
                    } else {
                        score2 += cellValues.num;
                        for (let i=0; i<cellValues.num; i++){
                            setTimeout(() => { 
                            if (div2.nextElementSibling != null){
                                div2.className = 'barL';
                                div2 = div2.nextElementSibling;
                            } else {
                                while (div2.previousElementSibling != null){
                                div2.className = 'bar';
                                div2 = div2.previousElementSibling;
                                }
                                div2.className = 'bar';
                            }
                        }, 400 * i);
                        }
                        turn = player1;
                        currentPlayer.textContent = turn.nickname;
                    }
                } else {
                    if (turn == player1){
                        while (div1.previousElementSibling != null){
                            div1.className = 'bar';
                            div1 = div1.previousElementSibling;
                        }
                        div1.className = 'bar';
                        turn = player2;
                        currentPlayer.textContent = turn.nickname;
                    } else {
                        while (div2.previousElementSibling != null){
                            div2.className = 'bar';
                            div2 = div2.previousElementSibling;
                        }
                        div2.className = 'bar';
                        turn = player1;
                        currentPlayer.textContent = turn.nickname;
                    }
                }
                console.log(score1, score2);
            }
            console.log(gridMap);
            if (Array.from(gridMap.entries()).every(([key, value]) => !value.covered)){
                scores.push({'p1': player1, 'p1points': score1, 'p2': player2, 'p2points': score2})
                navigate('scores'); 
            }
        }
    }
}