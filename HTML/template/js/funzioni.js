let parole=["casa","luna","tela","mare","mela","fiat","rosa","otto","cubo","mail"];
const indiceR = Math.floor(Math.random() * (parole.length ));
let parola=parole[indiceR];
d1=document.getElementById("d1");
l1=document.getElementById("l1");
l2=document.getElementById("l2");
l3=document.getElementById("l3");
l4=document.getElementById("l4");
d1.textContent=parola
function inizio(){ 
  let vet=parola.split("");
  let nuovoArray=vet.map((elemento,indice,arr)=>{
    let j=indice+Math.floor(Math.random() * (arr.length-indice));
    [elemento,arr[j]]=[arr[j],elemento];
    return elemento;
  })
  l1.textContent=nuovoArray[0];
  l2.textContent=nuovoArray[1];
  l3.textContent=nuovoArray[2];
  l4.textContent=nuovoArray[3];
}
document.addEventListener("DOMContentLoaded",inizio)