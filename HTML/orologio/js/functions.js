// Creo il setInterval che aggiorna l'ora ogni secondo (1000 millisecondi)
const clockInterval = setInterval(updateClock, 1000);

const addZero = num => (num < 10 ? '0' + num : num);

function updateClock() {
    let div = document.getElementById("clockDiv");
    const now = new Date(); 
    const hours = addZero(now.getHours()); 
    const minutes = addZero(now.getMinutes()); 
    const seconds = addZero(now.getSeconds()); 
    let time = hours + ":" + minutes + ":" + seconds;
    div.textContent = time;
}