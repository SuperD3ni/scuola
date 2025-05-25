export { usersView, gameView, scoresView };

const appState = {
    registeredPlayers: [],
    gameResults: [],
    playerStats: {}
};

function usersView() {
    let fragment = document.createDocumentFragment();
    let h1 = document.createElement('h1');
    h1.textContent = "Utenti";
    fragment.appendChild(h1);

    let form = document.createElement('form');
    let nameLabel = document.createElement('label');
    nameLabel.textContent = 'Nome:';
    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'nome';
    nameLabel.appendChild(nameInput);
    form.appendChild(nameInput);
    form.appendChild(nameLabel);

    let nicknameLabel = document.createElement('label');
    nicknameLabel.textContent = 'Nickname:';
    let nicknameInput = document.createElement('input');
    nicknameInput.type = 'text';
    nicknameInput.id = 'nickname';
    nicknameLabel.appendChild(nicknameInput);
    form.appendChild(nicknameInput);
    form.appendChild(nicknameLabel);

    let registerButton = document.createElement('button');
    registerButton.textContent = 'Registrati';
    form.appendChild(registerButton);

    let nicknameError = document.createElement('p');
    nicknameError.style.color = 'red';
    nicknameError.style.display = 'none';
    form.appendChild(nicknameError);

    fragment.appendChild(form);

    let playersList = document.createElement('ul');
    playersList.id = 'listaGiocatori';
    fragment.appendChild(playersList);

    function updatePlayersList() {
        playersList.innerHTML = '';
        for (let i = 0; i < appState.registeredPlayers.length; i++) {
            let player = appState.registeredPlayers[i];
            let listItem = document.createElement('li');
            listItem.textContent = `${player.name} (${player.nickname})`;
            playersList.appendChild(listItem);
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let name = nameInput.value;

        while (name.length > 0 && name.charAt(name.length - 1) === ' ') {
            name = name.substring(0, name.length - 1);
        }
        let nickname = nicknameInput.value;
        while (nickname.length > 0 && nickname.charAt(nickname.length - 1) === ' ') {
            nickname = nickname.substring(0, nickname.length - 1);
        }

        nicknameError.style.display = 'none';
        nicknameError.textContent = '';

        if (name.length > 0 && nickname.length > 0) {
            let existingPlayer = null;
            for (let i = 0; i < appState.registeredPlayers.length; i++) {
                if (appState.registeredPlayers[i].nickname === nickname) {
                    existingPlayer = appState.registeredPlayers[i];
                    break;
                }
            }

            if (existingPlayer) {
                nicknameError.textContent = `Il nickname "${nickname}" è già in uso. Scegli un altro nickname.`;
                nicknameError.style.display = 'block';
                return;
            }

            appState.registeredPlayers.push({ name: name, nickname: nickname });
            appState.playerStats[nickname] = { bestScore: 0, played: 0, won: 0, lost: 0 };
            updatePlayersList();

            nameInput.value = '';
            nicknameInput.value = '';
        }
    });

    updatePlayersList();

    return fragment;
}

function gameView() {
    let gameSectionContainer = document.createElement('div');
    gameSectionContainer.style.border = '1px solid #ccc'; // Styling minimal inline

    const registeredPlayers = appState.registeredPlayers;

    if (registeredPlayers.length < 2) {
        let errorMessage = document.createElement('p');
        errorMessage.textContent = "Errore: Ci sono meno di 2 giocatori registrati. Registrane almeno due per iniziare una partita.";
        errorMessage.style.color = 'red';
        gameSectionContainer.appendChild(errorMessage);
        return gameSectionContainer;
    }

    let playersForGame = [];

    if (registeredPlayers.length === 2) {
        playersForGame = registeredPlayers;
        startGame(playersForGame);
    } else {
        let selectionContainer = document.createElement('div');
        selectionContainer.innerHTML = '<h2>Seleziona due giocatori per la partita:</h2>';

        let playerCheckboxes = {};

        for (let i = 0; i < registeredPlayers.length; i++) {
            let player = registeredPlayers[i];
            let label = document.createElement('label');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = player.nickname;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(player.nickname));
            selectionContainer.appendChild(label);
            selectionContainer.appendChild(document.createElement('br'));
            playerCheckboxes[player.nickname] = checkbox;
        }

        let startButton = document.createElement('button');
        startButton.textContent = 'Avvia Partita';
        selectionContainer.appendChild(startButton);

        let selectionError = document.createElement('p');
        selectionError.style.color = 'red';
        selectionContainer.appendChild(selectionError);

        startButton.addEventListener('click', () => {
            let selectedNicknames = [];
            for (let nickname in playerCheckboxes) {
                let checkbox = playerCheckboxes[nickname];
                if (checkbox.checked) {
                    selectedNicknames.push(nickname);
                }
            }

            if (selectedNicknames.length === 2) {
                playersForGame = [];
                for (let i = 0; i < registeredPlayers.length; i++) {
                    let player = registeredPlayers[i];
                    let isSelected = false;
                    for (let j = 0; j < selectedNicknames.length; j++) {
                        if (player.nickname === selectedNicknames[j]) {
                            isSelected = true;
                            break;
                        }
                    }
                    if (isSelected) {
                        playersForGame.push(player);
                    }
                }
                gameSectionContainer.innerHTML = '';
                startGame(playersForGame);
            } else {
                selectionError.textContent = 'Devi selezionare esattamente due giocatori.';
            }
        });

        gameSectionContainer.appendChild(selectionContainer);
    }

    function startGame(selectedPlayers) {
        gameSectionContainer.innerHTML = '';

        let gameContainer = document.createElement('div');
        gameContainer.style.border = '1px solid black'; // Styling minimale
        gameContainer.style.padding = '10px';

        let playersInfo = document.createElement('div');
        let player1Display = document.createElement('p');
        player1Display.textContent = `Giocatore 1: ${selectedPlayers[0].nickname} - Punteggio: 0`;
        player1Display.id = 'player1-score';
        let player2Display = document.createElement('p');
        player2Display.textContent = `Giocatore 2: ${selectedPlayers[1].nickname} - Punteggio: 0`;
        player2Display.id = 'player2-score';
        playersInfo.appendChild(player1Display);
        playersInfo.appendChild(player2Display);
        gameContainer.appendChild(playersInfo);

        let turnDisplay = document.createElement('p');
        turnDisplay.id = 'turn-display';
        turnDisplay.textContent = `Turno di: ${selectedPlayers[0].nickname}`;
        gameContainer.appendChild(turnDisplay);

        let scoreBarsContainer = document.createElement('div');
        scoreBarsContainer.style.display = 'flex';
        scoreBarsContainer.style.marginTop = '10px';
        scoreBarsContainer.style.marginBottom = '20px';
        let player1Bar = document.createElement('div');
        player1Bar.id = 'player1-bar';
        player1Bar.style.width = '250px';
        player1Bar.style.height = '20px';
        player1Bar.style.border = '1px solid black';
        player1Bar.style.display = 'flex';
        player1Bar.style.marginRight = '10px';
        let player2Bar = document.createElement('div');
        player2Bar.id = 'player2-bar';
        player2Bar.style.width = '250px';
        player2Bar.style.height = '20px';
        player2Bar.style.border = '1px solid black';
        player2Bar.style.display = 'flex';
        scoreBarsContainer.appendChild(player1Bar);
        scoreBarsContainer.appendChild(player2Bar);
        gameContainer.appendChild(scoreBarsContainer);

        let grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(5, 50px)';
        grid.style.gap = '5px';
        grid.style.width = 'fit-content';
        gameContainer.appendChild(grid);

        let gameData = {
            players: [
                { nickname: selectedPlayers[0].nickname, score: 0, currentBarFill: 0, barDivs: [] },
                { nickname: selectedPlayers[1].nickname, score: 0, currentBarFill: 0, barDivs: [] }
            ],
            currentPlayerIndex: 0,
            revealedCellsCount: 0,
            totalCells: 30,
            cellStates: [], // Array per gestire lo stato di ogni cella (isRevealed, value)
            cellElements: [] // Array per memorizzare i riferimenti agli elementi DOM delle celle
        };

        for (let i = 0; i < 25; i++) {
            let div1 = document.createElement('div');
            div1.style.width = '10px';
            div1.style.height = '100%';
            div1.style.backgroundColor = 'grey';
            gameData.players[0].barDivs.push(div1);
            player1Bar.appendChild(div1);

            let div2 = document.createElement('div');
            div2.style.width = '10px';
            div2.style.height = '100%';
            div2.style.backgroundColor = 'grey';
            gameData.players[1].barDivs.push(div2);
            player2Bar.appendChild(div2);
        }

        let cellValues = Array(30).fill(0);
        let zeroPositions = {};
        let zeroCount = 0;
        while (zeroCount < 5) {
            let randomIndex = Math.floor(Math.random() * 30);
            if (!zeroPositions[randomIndex]) {
                zeroPositions[randomIndex] = true;
                zeroCount++;
            }
        }

        for (let i = 0; i < 30; i++) {
            if (zeroPositions[i]) {
                cellValues[i] = 0;
            } else {
                cellValues[i] = Math.floor(Math.random() * 3) + 1;
            }
            gameData.cellStates.push({
                isRevealed: false,
                value: cellValues[i]
            });
        }
        cellValues.sort(() => Math.random() - 0.5);

        for (let i = 0; i < 30; i++) {
            let cell = document.createElement('div');
            cell.style.width = '50px';
            cell.style.height = '50px';
            cell.style.border = '1px solid #000';
            cell.style.display = 'flex';
            cell.style.justifyContent = 'center';
            cell.style.alignItems = 'center';
            cell.style.cursor = 'pointer';
            cell.style.backgroundColor = '#f0f0f0'; // Colore default
            gameData.cellElements.push(cell); // Memorizza il riferimento all'elemento DOM
            cell.addEventListener('click', () => handleCellClick(i)); // Passa l'indice direttamente
            grid.appendChild(cell);
        }

        // Modificata la funzione per ricevere l'indice
        function handleCellClick(cellIndex) {
            const clickedCell = gameData.cellElements[cellIndex]; // Ottieni l'elemento DOM dal suo indice
            const cellState = gameData.cellStates[cellIndex]; // Ottieni lo stato della cella dall'array

            if (cellState.isRevealed === true) {
                return;
            }

            const value = cellState.value;
            const currentPlayer = gameData.players[gameData.currentPlayerIndex];
            const currentPlayerBarDivs = currentPlayer.barDivs;
            const currentPlayerScoreDisplay = gameData.currentPlayerIndex === 0 ? player1Display : player2Display;

            clickedCell.textContent = value;
            cellState.isRevealed = true; // Aggiorna lo stato nell'array
            clickedCell.style.backgroundColor = '#ccc'; // Cambia colore per indicare rivelato
            clickedCell.style.cursor = 'default';

            gameData.revealedCellsCount++;

            if (value > 0) {
                const oldBarFill = currentPlayer.currentBarFill;

                currentPlayer.score += value;
                currentPlayer.currentBarFill += value;

                if (currentPlayer.currentBarFill > 25) {
                    currentPlayer.currentBarFill = currentPlayer.currentBarFill % 25;
                    if (currentPlayer.currentBarFill === 0) {
                        currentPlayer.currentBarFill = 25;
                    }
                    for (let i = 0; i < currentPlayerBarDivs.length; i++) {
                        let div = currentPlayerBarDivs[i];
                        div.style.backgroundColor = 'grey'; // Reset del colore
                    }

                    for (let i = 0; i < currentPlayer.currentBarFill; i++) {
                        if (i < currentPlayerBarDivs.length) {
                            setTimeout((segmentIndex) => {
                                let div = currentPlayerBarDivs[segmentIndex];
                                div.style.backgroundColor = 'green'; // Colore "filled"
                            }, (i - oldBarFill) * 40, i);
                        }
                    }

                } else {
                    for (let i = oldBarFill; i < currentPlayer.currentBarFill; i++) {
                        if (i < currentPlayerBarDivs.length) {
                            setTimeout((segmentIndex) => {
                                let div = currentPlayerBarDivs[segmentIndex];
                                div.style.backgroundColor = 'green'; // Colore "filled"
                            }, (i - oldBarFill) * 40, i);
                        }
                    }
                }

                currentPlayerScoreDisplay.textContent = `Giocatore ${gameData.currentPlayerIndex + 1}: ${currentPlayer.nickname} - Punteggio: ${currentPlayer.score}`;

            } else {
                currentPlayer.currentBarFill = 0;
                for (let i = 0; i < currentPlayerBarDivs.length; i++) {
                    let div = currentPlayerBarDivs[i];
                    div.style.backgroundColor = 'grey'; // Colore "empty"
                }
            }

            gameData.currentPlayerIndex = (gameData.currentPlayerIndex + 1) % gameData.players.length;
            turnDisplay.textContent = `Turno di: ${gameData.players[gameData.currentPlayerIndex].nickname}`;

            if (gameData.revealedCellsCount === gameData.totalCells) {
                endGame();
            }
        }

        function endGame() {
            for (let i = 0; i < gameData.cellElements.length; i++) {
                gameData.cellElements[i].style.cursor = 'default';
                gameData.cellElements[i].removeEventListener('click', () => handleCellClick(i)); 

            }

            const player1 = gameData.players[0];
            const player2 = gameData.players[1];

            if (!appState.playerStats[player1.nickname]) {
                appState.playerStats[player1.nickname] = { bestScore: 0, played: 0, won: 0, lost: 0 };
            }
            if (!appState.playerStats[player2.nickname]) {
                appState.playerStats[player2.nickname] = { bestScore: 0, played: 0, won: 0, lost: 0 };
            }

            appState.playerStats[player1.nickname].played++;
            appState.playerStats[player2.nickname].played++;

            if (player1.score > appState.playerStats[player1.nickname].bestScore) {
                appState.playerStats[player1.nickname].bestScore = player1.score;
            }
            if (player2.score > appState.playerStats[player2.nickname].bestScore) {
                appState.playerStats[player2.nickname].bestScore = player2.score;
            }

            if (player1.score > player2.score) {
                appState.playerStats[player1.nickname].won++;
                appState.playerStats[player2.nickname].lost++;
            } else if (player2.score > player1.score) {
                appState.playerStats[player2.nickname].won++;
                appState.playerStats[player1.nickname].lost++;
            } else {
                // Parità
            }

            appState.gameResults.push({
                player1: { nickname: player1.nickname, score: player1.score },
                player2: { nickname: player2.nickname, score: player2.score }
            });

            console.log("Game results recorded:", appState.gameResults);
            console.log("Player Stats:", appState.playerStats);

            window.history.pushState(null, null, '#scores');
            window.dispatchEvent(new PopStateEvent('popstate'));
        }

        gameSectionContainer.appendChild(gameContainer);
    }

    return gameSectionContainer;
}

function scoresView() {
    let fragment = document.createDocumentFragment();
    let h1 = document.createElement('h1');
    h1.textContent = "Classifica Globale Giocatori";
    fragment.appendChild(h1);

    const playerStats = appState.playerStats;

    let sortedPlayers = [];
    let nicknames = Object.keys(playerStats);
    for (let i = 0; i < nicknames.length; i++) {
        let nickname = nicknames[i];
        sortedPlayers.push({
            nickname: nickname,
            bestScore: playerStats[nickname].bestScore,
            played: playerStats[nickname].played,
            won: playerStats[nickname].won,
            lost: playerStats[nickname].lost
        });
    }

    sortedPlayers.sort((a, b) => b.bestScore - a.bestScore);

    if (sortedPlayers.length === 0) {
        let p = document.createElement('p');
        p.textContent = "Nessuna partita giocata ancora. Registra giocatori e gioca per vedere la classifica!";
        fragment.appendChild(p);
    } else {
        let table = document.createElement('table');
        table.style.width = '100%'; // Styling minimale
        table.style.borderCollapse = 'collapse';
        let thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th style="border: 1px solid black; padding: 8px; text-align: left;">Pos.</th>
                <th style="border: 1px solid black; padding: 8px; text-align: left;">Nickname</th>
                <th style="border: 1px solid black; padding: 8px; text-align: left;">Miglior Punteggio</th>
                <th style="border: 1px solid black; padding: 8px; text-align: left;">Partite Giocate</th>
                <th style="border: 1px solid black; padding: 8px; text-align: left;">Vinte</th>
                <th style="border: 1px solid black; padding: 8px; text-align: left;">Perse</th>
            </tr>
        `;
        table.appendChild(thead);
        let tbody = document.createElement('tbody');

        for (let i = 0; i < sortedPlayers.length; i++) {
            let player = sortedPlayers[i];
            let row = document.createElement('tr');
            row.innerHTML = `
                <td style="border: 1px solid black; padding: 8px;">${i + 1}</td>
                <td style="border: 1px solid black; padding: 8px;">${player.nickname}</td>
                <td style="border: 1px solid black; padding: 8px;">${player.bestScore}</td>
                <td style="border: 1px solid black; padding: 8px;">${player.played}</td>
                <td style="border: 1px solid black; padding: 8px;">${player.won}</td>
                <td style="border: 1px solid black; padding: 8px;">${player.lost}</td>
            `;
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        fragment.appendChild(table);
    }
    return fragment;
}