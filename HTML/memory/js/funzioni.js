let immagini1=["icons8-american-football-96","icons8-basketball-96","icons8-bowling-96","icons8-boxing-glove-96"];
let immagini2=["icons8-field-hockey-96","icons8-martial-arts-uniform-96","icons8-ping-pong-96","icons8-soccer-ball-96"];
let immagini=[];
immagini.push(immagini1);
immagini.push(immagini2);
immagini.push(immagini1);
immagini.push(immagini2);

let primaCarta = null;
function mischia(images){
    images.forEach((riga) => {
      riga.forEach((elemento, ic) => {
        let r = parseInt(Math.random() * images.length);
        let c = parseInt(Math.random() * images[0].length);
    
        // Scambio
        [images[r][c], riga[ic]] = [riga[ic], images[r][c]];
     
      });
    });
  }

function gioca(){
    mischia(immagini)
   //inserisci codice
}


    function scopri(r, c) {
        const cartaCorrente = { immagine: immagini[r][c], riga: r, colonna: c };
      
        // Gestire il caso della stessa carta cliccata due volte
        if (primaCarta && primaCarta.riga === r && primaCarta.colonna === c) return;
      
        document.getElementById("d"+r+c).innerHTML = '<img src=./images/'+cartaCorrente.immagine+'.png>';
        
       //inserisci codice
      }


document.getElementById("b1").addEventListener("click",gioca);