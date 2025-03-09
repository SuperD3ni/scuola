function start(){
    const addZero = num => (num < 10 ? '0' + num : num);
    const clockInterval = setInterval(updateClock, 1000, addZero);
    const section = document.getElementById("s1");
    const map = new Map([ //map con le funzioni delle caselle
        [0, { description: "inizio", execute: () => special(null, 0) }],

        [1, { description: "O", execute: () => special(null, 1) }],

        [2, { description: "O", execute: () => special(null, 2) }],

        [3, { description: "+4", execute: () => special(4, 3) }],

        [4, { description: "-2", execute: () => special(-2, 4) }],

        [5, { description: "O", execute: () => special(null, 5) }],

        [6, { description: "O", execute: () => special(null, 6) }],

        [7, { description: "O", execute: () => special(null, 7) }],

        [8, { description: "-1", execute: () => special(-1, 8) }],

        [9, { description: "O", execute: () => special(null, 9) }],

        [10, { description: "O", execute: () => special(null, 10) }],

        [11, { description: "O", execute: () => special(null, 11) }],

        [12, { description: "O", execute: () => special(null, 12) }],

        [13, { description: "+12", execute: () => special(+12, 13) }],

        [14, { description: "O", execute: () => special(null, 14) }],

        [15, { description: "O", execute: () => special(null, 15) }],

        [16, { description: "O", execute: () => special(null, 16) }],

        [17, { description: "O", execute: () => special(null, 17) }],

        [18, { description: "O", execute: () => special(null, 18) }],

        [19, { description: "-7", execute: () => special(-7, 19) }],

        [20, { description: "O", execute: () => special(null, 20) }],

        [21, { description: "O", execute: () => special(null, 21) }],

        [22, { description: "O", execute: () => special(null, 22) }],

        [23, { description: "+2", execute: () => special(+2, 23) }],

        [24, { description: "-10", execute: () => special(-10, 24) }],

        [25, { description: "O", execute: () => special(null, 25) }],

        [26, { description: "-4", execute: () => special(-4, 26) }],

        [27, { description: "O", execute: () => special(null, 27) }],

        [28, { description: "O", execute: () => special(4, 28) }],

        [29, { description: "-2", execute: () => special(-2, 29) }],

        [30, { description: "fine", execute: () => special(null, 30) }],

    ]);
    for (let i=0; i<31; i++){
        let div = document.createElement("div");
        if (map.has(i)) {
            div.innerHTML = map.get(i).description;
        } else {
            console.log("descrizione non trovata");
        }
        section.appendChild(div);
        div.className = "cell";
        div.id = i
    }
    const button = document.createElement("button");
    button.id = "launch";
    button.innerHTML = "Lancio";
    button.addEventListener("click", launch);
    document.body.appendChild(button);
    document.getElementById("0").style.backgroundColor = "brown";

    function updateClock(addZero) { //funzione per l'orologio
        let div = document.getElementById("clockDiv");
        const now = new Date(); 
        const hours = addZero(now.getHours()); 
        const minutes = addZero(now.getMinutes()); 
        const seconds = addZero(now.getSeconds()); 
        let time = hours + ":" + minutes + ":" + seconds;
        div.innerHTML = time;
        return 0;
    }
    
    function launch(event){ //funzione del dado
        let n = Math.floor(Math.random() * 12) + 2; //numero casuale
        event.target.innerHTML = n;
        let currentDiv = document.getElementById("s1").firstElementChild;
        let id = 0;
        
        /*while (currentDiv.style.backgroundColor != "brown"){ //altra versione del codice peggiore
            currentDiv = currentDiv.nextElementSibling;
            id++;
        }
        let nEnd = n+id;
        const interval = setInterval(walk, 300);
        function walk(){
            if (id != nEnd && currentDiv.nextElementSibling != null){
                if (nEnd>0) {
                    currentDiv.style.backgroundColor = "whitesmoke";
                    currentDiv = currentDiv.nextElementSibling;
                    currentDiv.style.backgroundColor = "brown";
                } else {
                    currentDiv.style.backgroundColor = "whitesmoke";
                    currentDiv = currentDiv.previousElementSibling;
                    currentDiv.style.backgroundColor = "brown";
                }
            } else if (currentDiv.nextElementSibling == null){
                nEnd=-nEnd-31
                console.log(n)
            } else {
                if (map.has(id-1)) {
                    map.get(id-1).execute();
                } else {
                    console.log("funzione non trovata");
                }
                clearInterval(interval);
            }
        }*/

        while (currentDiv.style.backgroundColor != "brown"){ //trova il div su cui e' il giocatore
            currentDiv = currentDiv.nextElementSibling;
            id++
        }
        const interval = setInterval(walk, 300);
            function walk(){
                console.log(id+n, currentDiv.id);
                if (currentDiv.id != id+n && currentDiv.nextElementSibling != null){
                    if (n>0) {
                        currentDiv.style.backgroundColor = "whitesmoke";
                        currentDiv = currentDiv.nextElementSibling;
                        currentDiv.style.backgroundColor = "brown"; //da fare rendere il bottone non cliccabile durante il ciclo
                    } else {
                        currentDiv.style.backgroundColor = "whitesmoke";
                        currentDiv = currentDiv.previousElementSibling;
                        currentDiv.style.backgroundColor = "brown";
                    } //da fare il ritorno per quando si supera la fine
                } else {
                    if (map.has(id+n)) { //controlla se la chiave esiste per sicurezza
                        map.get(id+n).execute();
                    } else {
                        console.log(id+n);
                        console.log("funzione non trovata");
                    }
                    clearInterval(interval);
                }
            }
        return 0;
    }
    
    function special(n, id){ //funzione attivata dalle caselle
        currentDiv = document.getElementById(id);
        console.log(currentDiv);
        if (n != null) {
            const interval = setInterval(walk, 300);
            function walk(){
                if (currentDiv.id != id+n && currentDiv.nextElementSibling != null){
                    if (n>0) {
                        currentDiv.style.backgroundColor = "whitesmoke";
                        currentDiv = currentDiv.nextElementSibling;
                        currentDiv.style.backgroundColor = "brown";
                    } else {
                        currentDiv.style.backgroundColor = "whitesmoke";
                        currentDiv = currentDiv.previousElementSibling;
                        currentDiv.style.backgroundColor = "brown";
                    } //da fare il ritorno per quando si supera la fine
                } else {
                    clearInterval(interval);
                }
            }
        }
        }
    return 0;
}

document.addEventListener("DOMContentLoaded", start);