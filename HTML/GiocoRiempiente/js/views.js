export {usersView, gameView, scoresView}

let players = [{'name': 'sigma', 'nickname': '1'}, {'name': 'amogus', 'nickname': '2'}];
let scores = [];

function usersView(){
    const fragment = document.createDocumentFragment();

    const usersDiv = document.createElement('div');
    usersDiv.className = 'users';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.placeholder = 'name';
    usersDiv.appendChild(nameInput);

    const nicknameInput = document.createElement('input');
    nicknameInput.type = 'text';
    nicknameInput.id = 'nickname';
    nicknameInput.placeholder = 'nickname';
    usersDiv.appendChild(nicknameInput);

    const insertButton = document.createElement('button');
    insertButton.textContent = 'insert';
    usersDiv.appendChild(insertButton);

    const state = document.createElement('a')
    state.textContent = "add a player";
    usersDiv.appendChild(state);

    const playerList = document.createElement('ul');
    playerList.textContent = 'players:';
    playerList.id = 'playerList';
    usersDiv.appendChild(playerList);
    players.forEach(player => {
        const playerLi = document.createElement("li");
            playerLi.textContent = `name: ${player.name} ; nickname: ${player.nickname}`;
            playerList.appendChild(playerLi);
    })

    fragment.appendChild(usersDiv);

    insertButton.addEventListener("click", insertPlayer)

    function insertPlayer(){
        if (nameInput.value === '' || nicknameInput.value === ''){
            state.textContent = "name or nickname missing"
        } else {
            players.push({"name": nameInput.value, "nickname": nicknameInput.value })
            const playerLi = document.createElement("li");
            playerLi.textContent = `name: ${nameInput.value} ; nickname: ${nicknameInput.value}`
            playerList.appendChild(playerLi);
            nameInput.value = '';
            nicknameInput.value = '';
            state.textContent = "player added correctly";
        }
    }
    return fragment;
}

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
                    gridMap.set(cell, Math.floor(Math.random() * 3) + 1)
                    cell.className = 'cell';
                    cell.addEventListener('click', uncover);
                    grid.appendChild(cell);
                }

            }

            let zerosPlaced = 0; // place zeros
            while (zerosPlaced < 3) {
                const key = Array.from(gridMap.keys())[Math.floor(Math.random() * 30) + 1];
                if (gridMap.get(key)!=0){
                    gridMap.set(key, 0)
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
            cell.id = 'uncovered';
            cell.textContent = gridMap.get(cell);
            if (gridMap.get(cell) > 0){
                if (turn === player1){
                    score1 += gridMap.get(cell);
                    for (let i=0; i<gridMap.get(cell); i++){
                        if (div1.nextElementSibling != null){ // TO FIX: DIV1 IS NULL
                            setTimeout(() => { 
                            div1.className = 'barL';
                            div1 = div1.nextElementSibling;
                        }, 400 * i);
                        } else {
                            while (div1.previousElementSibling != null){
                                div1.className = 'bar';
                                div1 = div1.previousElementSibling;
                            }
                            div1.className = 'bar';
                        }
                    }
                    turn = player2;
                    currentPlayer.textContent = turn.nickname;
                } else {
                    score2 += gridMap.get(cell);
                    for (let i=0; i<gridMap.get(cell); i++){
                        if (div2.nextElementSibling != null){ // TO FIX: DIV2 IS NULL
                            setTimeout(() => { 
                            div2.className = 'barL';
                            div2 = div2.nextElementSibling;
                        }, 400 * i);
                        } else {
                            while (div2.previousElementSibling != null){
                                div2.className = 'bar';
                                div2 = div2.previousElementSibling;
                            }
                            div2.className = 'bar';
                        }
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
    }
}

function scoresView(){

}