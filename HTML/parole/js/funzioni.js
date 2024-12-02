let parole=["casa","imbuto","spada","jazzista","notte","uranio","young","veliero","west","opera","hotel","zaino","kayak","x-ray","daino","portone","gatto","tavolo","Joker","lampada","barca","quadro","mare","foglio","telefono","natale","erba","rumore","sirena","armadio"]; // definisce le parole possibili

let alfabeto=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; // definisce l'alfabeto

function mischiaParola(parola) { // Creazione funzione
    let arr = parola.split(""); // Converti la parola in un array di caratteri
    console.log(arr); // scrive nella console le lettere della parola
    let nomiIndicizzati = arr.map((elemento, indice) =>{ 
        let j=indice+Math.floor(Math.random() * (arr.length-indice));

        [elemento,arr[j]]=[arr[j],elemento]; // mischia la parola
   
        return elemento; // ritorna la parola mischiata nell'array nomiIndicizzati
       
    })

return nomiIndicizzati; // ritorna la parola mischiata
}

function parolaScelta(lettera) { // creazione funzione
    let parolaScelta="" //crea una variabile vuota
    do{
        let j=Math.floor(Math.random() * (parole.length)); 
        parolaScelta=parole[j]; //sceglie una parola a caso

    }while(!parolaScelta.startsWith(lettera)) //continua finche' la parola scelta non inizia con la lettera scelta
       
        return parolaScelta; // ritorna la parola scelta
       
    }


function scelta(){ //crea funzione
    cancellaParola(); //chiama la funzione che cancella la parola
    let lettera=this.textContent; //assegna il valore della lettera a lettera
    let parola=parolaScelta(lettera); //sceglie la parola tramite la funzione
    let parolaNas=mischiaParola(parola.slice(1, parola.length)); //mischia la parola tramite la funzione
    parolaNas.unshift(parola.charAt(0)); //fa in modo che la prima lettera della parola mischiata si la prima lettera della parola
    let padre=document.getElementById("s2"); //definisce la section in cui staranno i div delle lettere della parola mischiata
    parolaNas.forEach((valore,indice)=>{ //inizia ciclo foreach
        let figlio=document.createElement('div'); //crea div
        id="d"+(indice+1); //crea id per il div
        figlio.className="div1"; //assegna classe al div
        figlio.textContent=valore; //assegna lettera al div
        figlio.id=id; //assegna id al div
        padre.appendChild(figlio); //mette il div come figlio della section
   
   
    function spostaControlla(figlio){ //crea funzione
        padre.appendChild(figlio); //aggiunge div cliccato alla coda della section
        let arr1=padre.querySelectorAll("div"); //salva tutti i div in una list
        arr1=Array.from(arr1); //converte la list in un array
        if(controlla(arr1,parola)){ //controlla se le lettere sono nell'ordine corretto tramite la funzione
            arr1.forEach(elemento=>elemento.style.background="green"); //colora tutti i div di verde nel caso le lettere siano nell'ordine corretto
           
        }
    };
   
     
    const listener = () => spostaControlla(figlio); //quando viene chiamato listener chiama la funzione
    figlio.addEventListener("click", listener); //aggiunge ascoltatore
    figlio.listener = listener; //aggiunge ascoltatore al div
       
    })
   
   
}

function inizio(){ //crea funzione
      let padre=document.getElementById("s3"); //definisce section contenente le lettere dell'alfabeto
   alfabeto.forEach((valore,indice)=>{ //inizio ciclo forEach
    let figlio=document.createElement('div'); //crea div della lettera
    id="c"+(indice+1); //crea id
    figlio.className="car"; //aggiunge classe al div della lettera
    figlio.textContent=valore; //scrive lettera sul div
    figlio.id=id; //aggiunge id creato al div della lettera
    padre.appendChild(figlio); //aggiunge il div come figlio della section
    console.log(id); //scrive l'id nel log
    document.getElementById(id).addEventListener("click",scelta); //aggiunge ascoltatore per il div tramite l'id
   
});

   
}

function cancellaParola(){ //crea funzione
    let array=document.getElementsByClassName("div1"); //trova i div da cancellare tramite il nome della classe e li salva in una list
    array=Array.from(array); //converte la list in un array
    let padre=document.getElementById("s2"); //definisce la section dove stanno le lettere mischiate
    array.forEach(elemento=>padre.removeChild(elemento)) //cancella i div
};

function controlla(array, parola){ //crea funzione
    let cond = true; //crea una condizione
    array.forEach((elemento, indice)=>{ //inizio ciclo forEach
        if (elemento.textContent!=parola[indice]){ //verifica se la lettera della parola mischiata a quel punto e' adiacente a quella della parola non mischiata
            cond = false; //la condizione diventa falsa
        }
    })
    if (cond){ //verifica se la condizione e' vera (tutte lettere uguali)
        return true; //ritorna vero
    } else { //altrimenti (almeno una lettera non uguale)
        return false; //ritorna falso
    }
};


document.addEventListener("DOMContentLoaded",inizio); //aggiunge ascoltatore per quando si carica la pagina