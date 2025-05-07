import {msView} from '../js/minesweeper.js'
document.addEventListener('DOMContentLoaded', start)

function start(){

    let views = new Map([
        ['home', homeView],
        ['minesweeper', msView],
        ['goosegame', ggView]
    ])

    window.addEventListener('popstate', handleLocation);

    function navigate(viewName) {
        const view = views.get(viewName);
        if (view) {
          const app = document.getElementById('app');
          app.innerHTML = '';
          app.appendChild(view());
        }
    }

    document.addEventListener('click', (event) => {
        if (event.target.matches('[data-view]')) {
          event.preventDefault();
          const viewName = event.target.dataset.view;
          navigate(viewName);
          history.pushState(null, null, `#${viewName}`); // Aggiorna l'URL
        }
      });

    function handleLocation() {
        const viewName = location.hash.substring(1) || 'home';
        navigate(viewName);
    }

    function homeView(){ // home
        let fragment = document.createDocumentFragment();
        let h1 = document.createElement('h1');
        h1.textContent = "Gioco Sigma";
        fragment.appendChild(h1);
        return fragment;
    }



    function ggView(){ // gioco dell'oca
        let fragment = document.createDocumentFragment();
        let section1 = document.createElement('section');
        fragment.appendChild(section1);
        let section2 = document.createElement('section');
        section1.appendChild(section2);
        section2.id = "s1"
        let board = document.createElement('div');
        board.id = "board";
        let diceButton = document.createElement('button');
        diceButton = "diceButton";
        diceButton.innerHTML = "Tira i dadi";
        let diceResult = document.createElement('div');
        diceResult.id = "diceResult";
        let actionResult = document.createElement('div');
        actionResult.id = "actionResult";
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
            fragment.appendChild(div);
            if (map.has(i)) {
                div.innerHTML = map.get(i).description;
            } else {
                console.log("descrizione non trovata");
            }
            section2.appendChild(div);
            div.className = "cell";
            div.id = i
        }
        const button = document.createElement("button");
        fragment.appendChild(button);
        button.id = "launch";
        button.innerHTML = "Lancio";
        button.addEventListener("click", launch);
        section2.firstElementChild.style.backgroundColor = "brown";
        
        
        function launch(event){ //funzione del dado
            let n = Math.floor(Math.random() * 12) + 2; //numero casuale
            event.target.innerHTML = n;
            let currentDiv = section2.firstElementChild;
            let id = 0;
    
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

            return fragment;
    
}
}

