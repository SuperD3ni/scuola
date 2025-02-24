function start(){
    const addZero = num => (num < 10 ? '0' + num : num);
    const clockInterval = setInterval(updateClock, 1000, addZero);
    const section = document.getElementById("s1");
    for (let i=0; i<30; i++){
        let div = document.createElement("div");
        div.innerHTML = i+1;
        section.appendChild(div);
        div.className = "cell";
        div.id = i+1
    }
    const button = document.createElement("button");
    button.id = "launch";
    button.innerHTML = "Lancio";
    button.addEventListener("click", launch);
    document.body.appendChild(button);
    document.getElementById("1").style.backgroundColor = "brown";
    return 0;
}

function updateClock(addZero) {
    let div = document.getElementById("clockDiv");
    const now = new Date(); 
    const hours = addZero(now.getHours()); 
    const minutes = addZero(now.getMinutes()); 
    const seconds = addZero(now.getSeconds()); 
    let time = hours + ":" + minutes + ":" + seconds;
    div.innerHTML = time;
}
document.addEventListener("DOMContentLoaded", start);

function launch(event){
    let n = Math.floor(Math.random() * 12) + 1;
    event.target.innerHTML = n;
    let currentDiv = document.getElementById("s1").firstElementChild;
    let id = 1;
    while (currentDiv.style.backgroundColor != "brown"){
        currentDiv = currentDiv.nextElementSibling;
        id++;
    }
    let nEnd = n+id;
    const interval = setInterval(walk, 300);
    function walk(){
        if (id < nEnd && currentDiv.nextElementSibling != null){
            console.log(id, n);
            currentDiv.style.backgroundColor = "whitesmoke";
            currentDiv = currentDiv.nextElementSibling;
            id++
            currentDiv.style.backgroundColor = "brown";
        } else {
            clearInterval(interval); //finisce l'interval e smette di eseguire la funzione
        }
    }
}

