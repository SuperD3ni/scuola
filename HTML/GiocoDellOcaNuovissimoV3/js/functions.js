const caselleBase = [
    { descrizione: "Casella di passaggio", colore: "salmon" },
    { descrizione: "Ponte magico", colore: "green" },
    { descrizione: "Trappola", colore: "red" },
    { descrizione: "Pozzo dei desideri", colore: "green" },
    { descrizione: "Drago furioso", colore: "red" },
    { descrizione: "Fata madrina", colore: "green" },
    { descrizione: "Strega malvagia", colore: "red" },
    { descrizione: "Tesoro nascosto", colore: "green" },
    { descrizione: "Palude melmosa", colore: "red" },
    { descrizione: "Albero della saggezza", colore: "green" },
    { descrizione: "Sabbie mobili", colore: "red" },
    { descrizione: "Cavaliere d'oro", colore: "green" },
    { descrizione: "Labirinto oscuro", colore: "red" },
    { descrizione: "Fontana magica", colore: "green" },
    { descrizione: "Ragnatela appiccicosa", colore: "red" },
    { descrizione: "Unicorno bianco", colore: "green" },
    { descrizione: "Torre crollante", colore: "red" },
    { descrizione: "Mercante generoso", colore: "green" },
    { descrizione: "Banditi di strada", colore: "red" },
    { descrizione: "Oasi rigenerante", colore: "green" },
    { descrizione: "Tempesta di sabbia", colore: "red" },
    { descrizione: "Baule del tesoro", colore: "green" },
    { descrizione: "Trono maledetto", colore: "red" },
    { descrizione: "Stella cadente", colore: "green" },
    { descrizione: "Caverna dei troll", colore: "red" },
];

const caselleSenzaPrima = caselleBase.slice(1);
const caselleCopia = caselleSenzaPrima.map(casella => ({ ...casella }));
const casellaPassaggio = caselleBase.find(casella => casella.descrizione === "Casella di passaggio");

while (caselleCopia.length < 29) {
    caselleCopia.push({ ...casellaPassaggio });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(caselleCopia);

const nuovaCasellaPassaggio = { descrizione: "Casella di passaggio", colore: "salmon" };

caselleCopia.unshift(nuovaCasellaPassaggio);

const mappa = new Map(caselleCopia.map(casella => [casella, null]));

const azioni = [
    { descrizioneAzione: "Avanza di 2 caselle", tipoAzione: "positiva", azione: () => avanzaGiocatore(2) },
    { descrizioneAzione: "Perdi un turno", tipoAzione: "negativa", azione: () => console.log("Perdi un turno") },
    { descrizioneAzione: "Torna alla casella 6", tipoAzione: "negativa", azione: () => spostaGiocatore(5) },
    { descrizioneAzione: "Tira di nuovo il dado", tipoAzione: "positiva", azione: () => tiraDadi() },
    { descrizioneAzione: "Ottieni un punto bonus", tipoAzione: "positiva", azione: () => console.log("Ottieni un punto bonus") },
    { descrizioneAzione: "Vai alla casella 25", tipoAzione: "positiva", azione: () => spostaGiocatore(24) },
    { descrizioneAzione: "Torna indietro di 3 caselle", tipoAzione: "negativa", azione: () => avanzaGiocatore(-3) },
    { descrizioneAzione: "Salta il prossimo turno", tipoAzione: "negativa", azione: () => console.log("Salta il prossimo turno") },
    { descrizioneAzione: "Hai vinto il gioco!", tipoAzione: "positiva", azione: () => console.log("Hai vinto il gioco!") }
];

const azioniPositive = azioni.filter(azione => azione.tipoAzione === "positiva");
const azioniNegative = azioni.filter(azione => azione.tipoAzione === "negativa");

function ottieniAzioneCasuale(azioni) {
    return azioni[Math.floor(Math.random() * azioni.length)];
}

caselleCopia.forEach(casella => {
    if (casella.colore === "green") {
        mappa.set(casella, ottieniAzioneCasuale(azioniPositive));
    } else if (casella.colore === "red") {
        mappa.set(casella, ottieniAzioneCasuale(azioniNegative));
    }
});

const board = document.getElementById("board");
const diceButton = document.getElementById("diceButton");
const diceResultDiv = document.getElementById("diceResult");
const actionResultDiv = document.getElementById("actionResult");
let posizioneGiocatore = 0;
let intervalloMovimento;

function visualizzaCaselle() {
    caselleCopia.forEach(casella => {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.backgroundColor = casella.colore;
        cell.textContent = casella.descrizione;
        board.appendChild(cell);
    });
}

visualizzaCaselle();

function avanzaGiocatore(caselle) {
    let destinazione = posizioneGiocatore + caselle;
    if (destinazione < 0) {
        destinazione = 0;
    } else if (destinazione >= caselleCopia.length) {
        destinazione = caselleCopia.length - 1;
    }

    let passi = caselle > 0 ? 1 : -1;
    let passoCorrente = posizioneGiocatore;

    intervalloMovimento = setInterval(() => {
        passoCorrente += passi;
        aggiornaPosizioneGiocatore(passoCorrente);

        if (passoCorrente === destinazione) {
            clearInterval(intervalloMovimento);
            posizioneGiocatore = destinazione;
            const casellaCorrente = caselleCopia[posizioneGiocatore];
            const azioneCorrente = mappa.get(casellaCorrente);
            if (azioneCorrente) {
                actionResultDiv.textContent = `Azione: ${azioneCorrente.descrizioneAzione}`;
                azioneCorrente.azione();
            } else {
                actionResultDiv.textContent = "Nessuna azione speciale.";
            }
        }
    }, 200);
}

function spostaGiocatore(nuovaPosizione) {
    avanzaGiocatore(nuovaPosizione - posizioneGiocatore);
}

function aggiornaPosizioneGiocatore(posizione) {
    const celle = document.querySelectorAll('.cell');
    celle.forEach(cella => cella.classList.remove('player'));
    board.children[posizione].classList.add('player');
}

aggiornaPosizioneGiocatore(posizioneGiocatore);

function tiraDadi() {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const sommaDadi = dado1 + dado2;
    diceResultDiv.textContent = `Dadi: ${dado1} + ${dado2} = ${sommaDadi}`;
    avanzaGiocatore(sommaDadi);
}

diceButton.addEventListener("click", tiraDadi);