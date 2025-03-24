let progetti = new Map();
progetti.set('SitoClienteA', ["Aggiorna header", "Aggiungi pulsante contatto", "Aggiorna footer"]);

let membriDelTeam = new Map([
    [1, {Nome: 'Luca', Ruolo: 'Sviluppatore Frontend', Progetto: "nessuno"}],
    [2, {Nome: 'Sofia', Ruolo: 'Sviluppatore Backend', Progetto: "nessuno"}],
    [3, {Nome: 'Giulia', Ruolo: 'Tester', Progetto: "nessuno"}]
]);

let i=1;

membriDelTeam.forEach((valore, priorita)=>{
    valore.Progetto = "SitoClienteA";
    valore.Azione = progetti.get("SitoClienteA")[i-1];
    valore.Completata = false;
    i++;
})

function controllo(){
    membriDelTeam.forEach((valore, priorita)=>{
        let precedenteCompletato = false;
        if (priorita != 1){
            if (membriDelTeam.get(priorita-1).Completata == true){
                precedenteCompletato = true;
            }
        } else {
            precedenteCompletato = true;
        }
        if (valore.Completata == false && precedenteCompletato == true){
            console.log(valore.Nome);
        }
    })
}

membriDelTeam.forEach((valore, priorita)=>{
    console.log(`${valore.Nome}: progetto: ${valore.Progetto}, azione: ${valore.Azione}, completato: ${valore.Completata}`);
})
controllo();