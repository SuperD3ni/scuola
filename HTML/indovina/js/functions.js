let parole=["casa","luna","tela","mare","cane"];
const indiceR = Math.floor(Math.random() * (parole.length ));
let parola=parole[indiceR];

function mischiay(parola) {
    let arr = parola.split(""); // Converti la parola in un array di caratteri
    console.log(arr);
    let nomiIndicizzati = arr.map((elemento, indice) =>{
        let j=indice+Math.floor(Math.random() * (arr.length-indice));
        [elemento,arr[j]]=[arr[j],elemento];
        return elemento;    
    })

return nomiIndicizzati;
}

function inizio(){
let parolaMischiata=mischiay(parole[indiceR]);
parolaMischiata.forEach((elemento,indice)=>{
    d="d"+(indice+1)
    document.getElementById(d).textContent=elemento;
});
}

function check(){
    let guess=document.getElementById("i").value.split("");
    let arr = parola.split("")
    arr.forEach((elemento,indice)=>{
        d="d"+(indice+1)
        if (elemento==guess[indice]){
            document.getElementById(d).style.backgroundColor="green";
            document.getElementById(d).textContent=elemento;
        }
        else {
            document.getElementById(d).style.backgroundColor="red";
            document.getElementById(d).textContent=elemento;
        }
    });
}

document.addEventListener("DOMContentLoaded",inizio);  
document.getElementById("b").addEventListener("click",check);
