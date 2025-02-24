let immagini1=["icons8-american-football-96","icons8-basketball-96","icons8-bowling-96","icons8-boxing-glove-96"];
let immagini2=["icons8-field-hockey-96","icons8-martial-arts-uniform-96","icons8-ping-pong-96","icons8-soccer-ball-96"];
let immagini=[];
immagini.push(immagini1);
immagini.push(immagini2);
immagini.push(immagini1);
immagini.push(immagini2);
//let risultato=getElementById("risultato");
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
    mischia(immagini);
    immagini.forEach((riga,i)=>{
      riga.forEach((elemento,k)=>{
        document.getElementById("d"+i+k).innerHTML="<img src='./images/diamonds.png' width=80>";
        document.getElementById("d"+i+k).addEventListener("click",()=>{
          scopri(i,k);
      })
    })
   })
}


    function scopri(r, c) {
        const cartaCorrente = { immagine: immagini[r][c], riga: r, colonna: c };
        if (primaCarta && primaCarta.riga === r && primaCarta.colonna === c) return;
        document.getElementById("d"+r+c).innerHTML = '<img src=./images/'+cartaCorrente.immagine+'.png>';
       if(primaCarta){
        if(cartaCorrente.immagine==primaCarta.immagine){
          primaCarta=null;
        }
        else{
          document.getElementById("s1").style.pointerEvents='none';
          setTimeout(() => { 
            document.getElementById("d"+r+c).innerHTML="<img src='./images/diamonds.png' width=80>";
            document.getElementById("d"+primaCarta.riga+primaCarta.colonna).innerHTML="<img src='./images/diamonds.png' width=80>";
            document.getElementById("s1").style.pointerEvents='auto';
            primaCarta=null;
        }, 600);
        }
       }
       else{
        primaCarta=cartaCorrente;
       }
       vincitore();
      }

function reset() {

  gioca();
}
    

function vincitore() {
  for (let i = 0; i < immagini.length; i++) {
      for (let j = 0; j < immagini[i].length; j++) {
          const elemento = document.getElementById("d" + i + j).innerHTML;
          if (elemento.includes("diamonds.png")) {
              return false;
          }
      }
  }
  risultato.textContent=("Hai vinto!");
}


document.getElementById("b1").addEventListener("click",gioca);
document.getElementById("reset").addEventListener("click",reset);