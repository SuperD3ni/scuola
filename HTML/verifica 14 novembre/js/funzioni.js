let parole=["casa","imbuto","spada","jazzista","notte","uranio","young","veliero","west","opera","hotel","zaino","kayak","x-ray","daino","portone","gatto","tavolo","Joker","lampada","barca","quadro","mare","foglio","telefono","natale","erba","rumore","sirena","armadio"];

let alfabeto=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function parolaScelta(lettera) {//ritorna una parola scelta a caso tra le parole dell'array parole,
                                // che cominciano con la lettera passata come argomento alla funzione
    let parolaS;
    
        do {
            const indiceR = Math.floor(Math.random() * parole.length);
            parolaS = parole[indiceR];
        } while (parolaS.startsWith(lettera)!=true);


        return parolaS;
        
    }

function alfab(){
    alfabeto.forEach((element,i)=>{
        let d = "c" + (i + 1); 
        document.getElementById(d).textContent = element;
            

    })

}

function scelta(){  
    //chiama la funzione parolaScelta, inserisce le lettere in un array e crea un nuovo array 
    // che ha come primo elemento la prima lettera della parola scelta e poi tutti _ . Inserisce i valori del nuovo array nei div
    //colora di rosso dei div che contengono le lettere della parola scelta e di giallo i rimanenti div 
    let lettera = this.textContent; 
    console.log(lettera);           
    parola=parolaScelta(lettera);
    console.log(parola);
    parolaDivisa=parola.split("");
    console.log(parolaDivisa);

    let parolaMascherata = parolaDivisa.map((element, i) => {
        if (i == 0) {
            return element;
        } else {
            return "_";
        }
    });

    console.log(parolaMascherata)

    parolaMascherata.forEach((element, i) => {
        let figlio=document.createElement('div');
        figlio.id="d"+(i+1);
        figlio.className="div1";
        let padre=document.getElementById("s2");
        padre.appendChild(figlio);

        let d = "d" + (i + 1); 
        document.getElementById(d).style.backgroundColor="red";
        document.getElementById(d).textContent=element;

    })



}

function inizio(){

   /* for(i=1;i<=26;i++){


        if(i<=8){
    let figlio=document.createElement('div');
    figlio.id="d"+i;
    figlio.className="div1";
    let padre=document.getElementById("s2");
    padre.appendChild(figlio);

    let figlio1=document.createElement('div');
    figlio1.id="c"+i;
    figlio1.className="car"
    let padre1=document.getElementById("s3");
    padre1.appendChild(figlio1);
    figlio1.textContent=alfabeto[i];
}
    else{
    let figlio1=document.createElement('div');
    figlio1.id="c"+i;
    figlio1.className="car"
    let padre1=document.getElementById("s3");
    padre1.appendChild(figlio1);
    figlio1.textContent=alfabeto[i];
}
}
}
*/
alfabeto.forEach((valore,index) =>{
    let nuovoElemento=document.createElement("div");
    let padre=document.getElementById("s3");
    nuovoElemento.className="car";
    nuovoElemento.id="c"+(index+1);
    padre.appendChild(nuovoElemento);
    nuovoElemento.textContent=valore;

    
});
for(i=1;i<=26;i++){
    id="c"+i; 
   document.getElementById(id).addEventListener("click",scelta);
}
}

document.addEventListener("DOMContentLoaded", inizio);



