const caselleBase = [

    { descrizione: "Casella di passaggio", colore: "salmon" },

    { descrizione: "Ponte magico", colore: "verde" },

    { descrizione: "Trappola", colore: "rosso" },

    { descrizione: "Pozzo dei desideri", colore: "verde" },

    { descrizione: "Drago furioso", colore: "rosso" },

    { descrizione: "Fata madrina", colore: "verde" },

    { descrizione: "Strega malvagia", colore: "rosso" },

    { descrizione: "Tesoro nascosto", colore: "verde" },

    { descrizione: "Palude melmosa", colore: "rosso" },

    { descrizione: "Albero della saggezza", colore: "verde" },

    { descrizione: "Sabbie mobili", colore: "rosso" },

    { descrizione: "Cavaliere d'oro", colore: "verde" },

    { descrizione: "Labirinto oscuro", colore: "rosso" },

    { descrizione: "Fontana magica", colore: "verde" },

    { descrizione: "Ragnatela appiccicosa", colore: "rosso" },

    { descrizione: "Unicorno bianco", colore: "verde" },

    { descrizione: "Torre crollante", colore: "rosso" },

    { descrizione: "Mercante generoso", colore: "verde" },

    { descrizione: "Banditi di strada", colore: "rosso" },

    { descrizione: "Oasi rigenerante", colore: "verde" },

    { descrizione: "Tempesta di sabbia", colore: "rosso" },

    { descrizione: "Baule del tesoro", colore: "verde" },

    { descrizione: "Trono maledetto", colore: "rosso" },

    { descrizione: "Stella cadente", colore: "verde" },

    { descrizione: "Caverna dei troll", colore: "rosso" },

];

let casellaSenzaPrima= caselleBase.slice(1);
console.log(casellaSenzaPrima);
const casellaCopia =casellaSenzaPrima.map(casella =>({...casella}));
console.log(casellaCopia);
let caselllaPassaggio=caselleBase.find(casella=>casella.descrizione==="casella pasagio")
console.log(caselllaPassaggio);

while (casellaCopia.leght <29 ){
    casellaCopia.push(...caselllaPassaggio);
}
console.log(casellaCopia);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Indice casuale
        [array[i], array[j]] = [array[j], array[i]]; // Scambia gli elementi
    }
}

shuffleArray(casellaCopia);
console.log(casellaCopia);

casellaCopia.unshift(...caselllaPassaggio);
console.log(casellaCopia);

let casellaFinale=casellaCopia.map(casella=>[casella,null]);

const mappa=new Map (casellaFinale)
console.log(mappa);
const azioni = [

    {

        descrizioneAzione: "Avanza di 2 caselle",

        tipoAzione: "positiva",

        azione: (giocatore) => console.log("Avanza di 2 caselle"),

    },

    {

        descrizioneAzione: "Perdi un turno",

        tipoAzione: "negativa",

        azione: () => console.log("Perdi un turno"),

    },

    {

        descrizioneAzione: "Torna alla casella 6",

        tipoAzione: "negativa",

        azione: (giocatore) => console.log("Torna alla casella 6"),

    },

    {

        descrizioneAzione: "Tira di nuovo il dado",

        tipoAzione: "positiva",

        azione: () => console.log("Tira di nuovo il dado"),

    },

    {

        descrizioneAzione: "Ottieni un punto bonus",

        tipoAzione: "positiva",

        azione: () => console.log("Ottieni un punto bonus"),

    },

    {

        descrizioneAzione: "Vai alla casella 25",

        tipoAzione: "positiva",

        azione: (giocatore) => console.log("Vai alla casella 25"),

    },

    {

        descrizioneAzione: "Torna indietro di 3 caselle",

        tipoAzione: "negativa",

        azione: (giocatore) => console.log("Torna indietro di 3 caselle"),

    },

    {

        descrizioneAzione: "Salta il prossimo turno",

        tipoAzione: "negativa",

        azione: () => console.log("Salta il prossimo turno"),

    },

    {

        descrizioneAzione: "Hai vinto il gioco!",

        tipoAzione: "positiva",

        azione: () => console.log("Hai vinto il gioco!"),

    }

];
let azioniPositive= azioni.filter(azione=>azione.topiAzione==="positive");
console.log(azioniPositive);