export {scoresView}
import { players } from "./functions.js";
import { scores } from "./functions.js";

function scoresView(){
    const fragment = document.createDocumentFragment();
    const scoresDiv = document.createElement('div');
    console.log(scores);
    let playerWins = new Map();
    players.forEach((value, i)=>{
        playerWins.set(value, 0);
    })
    scores.forEach((value, i)=>{
        const score = document.createElement('h3');
        scoresDiv.appendChild(score);
        if (scores[i].p1points > scores[i].p2points){
            playerWins.set(scores[i].p1, playerWins.get(scores[i].p1) + 1);
            score.textContent = `${scores[i].p1.nickname} con ${scores[i].p1points} VS ${scores[i].p2.nickname} con ${scores[i].p2points}, vittoria di ${scores[i].p1.nickname}`;
        } else if (scores[i].p1points < scores[i].p2points) {
            playerWins.set(scores[i].p2, playerWins.get(scores[i].p2) + 1);
            score.textContent = `${scores[i].p1.nickname} con ${scores[i].p1points} VS ${scores[i].p2.nickname} con ${scores[i].p2points}, vittoria di ${scores[i].p2.nickname}`;
        } else {
            score.textContent = `${scores[i].p1.nickname} con ${scores[i].p1points} VS ${scores[i].p2.nickname} con ${scores[i].p2points}, pareggio`;
        }
    })
    playerWins.forEach((value, key)=>{
        const win = document.createElement('h2');
        scoresDiv.appendChild(win);
        win.textContent = `${key.nickname} vittorie: ${value}`;
    })
    
    fragment.appendChild(scoresDiv);
    return fragment;
}
