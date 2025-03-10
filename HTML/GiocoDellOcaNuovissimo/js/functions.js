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

let casellaSenzaPrima = caselleBase.slice(1);
const casellaCopia = casellaSenzaPrima.map(casella => ({ ...casella }));
let casellaPassaggio = caselleBase.find(casella => casella.descrizione === "Casella di passaggio");

while (casellaCopia.length < 29) {
    casellaCopia.push({ ...casellaPassaggio });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(casellaCopia);
casellaCopia.unshift({ ...casellaPassaggio });

let casellaFinale = casellaCopia.map(casella => [casella, null]);
const mappa = new Map(casellaFinale);

const azioni = [
    { descrizioneAzione: "Avanza di 2 caselle", tipoAzione: "positiva", azione: () => console.log("Avanza di 2 caselle") },
    { descrizioneAzione: "Perdi un turno", tipoAzione: "negativa", azione: () => console.log("Perdi un turno") },
    { descrizioneAzione: "Torna alla casella 6", tipoAzione: "negativa", azione: () => console.log("Torna alla casella 6") },
    { descrizioneAzione: "Tira di nuovo il dado", tipoAzione: "positiva", azione: () => console.log("Tira di nuovo il dado") },
    { descrizioneAzione: "Ottieni un punto bonus", tipoAzione: "positiva", azione: () => console.log("Ottieni un punto bonus") },
    { descrizioneAzione: "Vai alla casella 25", tipoAzione: "positiva", azione: () => console.log("Vai alla casella 25") },
    { descrizioneAzione: "Torna indietro di 3 caselle", tipoAzione: "negativa", azione: () => console.log("Torna indietro di 3 caselle") },
    { descrizioneAzione: "Salta il prossimo turno", tipoAzione: "negativa", azione: () => console.log("Salta il prossimo turno") },
    { descrizioneAzione: "Hai vinto il gioco!", tipoAzione: "positiva", azione: () => console.log("Hai vinto il gioco!") }
];

const azioniPositive = azioni.filter(azione => azione.tipoAzione === "positiva");
const azioniNegative = azioni.filter(azione => azione.tipoAzione === "negativa");

casellaCopia.forEach(casella => {
    if (casella.colore === "green") {
        mappa.set(casella, azioniPositive[Math.floor(Math.random() * azioniPositive.length)]);
    } else if (casella.colore === "red") {
        mappa.set(casella, azioniNegative[Math.floor(Math.random() * azioniNegative.length)]);
    }
});

const posizione = 4;
const casellaCorrente = casellaCopia[posizione];
const azioneCorrente = mappa.get(casellaCorrente);

console.log(`Alla casella ${posizione + 1} (${casellaCorrente.descrizione}):`);
if (azioneCorrente) {
    console.log(`Azione: ${azioneCorrente.descrizioneAzione}`);
    azioneCorrente.azione();
} else {
    console.log("Nessuna azione speciale.");
}

// Funzione per visualizzare le caselle nel HTML
function visualizzaCaselle() {
    const board = document.getElementById("board");
    casellaCopia.forEach(casella => {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.backgroundColor = casella.colore;
        cell.textContent = casella.descrizione;
        board.appendChild(cell);
    });
}

visualizzaCaselle();