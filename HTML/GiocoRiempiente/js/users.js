export {usersView}
import { players } from "./functions.js";
import { scores } from "./functions.js";

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