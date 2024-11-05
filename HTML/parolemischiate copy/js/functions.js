let parole=["casa","pomo","more","mare","luna","topo","sale","rosa","cibo","ciao"];
const indiceR = Math.floor(Math.random() * (parole.length ));
let parola=parole[indiceR];
d1=document.getElementById("d1");
l1=document.getElementById("l1");
l2=document.getElementById("l2");
l3=document.getElementById("l3");
l4=document.getElementById("l4");
d1.textContent=parola
function parti(){ 
  let v = parola.split("");
  let nuovoV = v.map((elemento,indice,arr)=>{
    let j=indice+Math.floor(Math.random() * (arr.length-indice));
    [elemento,arr[j]]=[arr[j],elemento];
    return elemento;
  })
  l1.textContent=nuovoV[0];
  l2.textContent=nuovoV[1];
  l3.textContent=nuovoV[2];
  l4.textContent=nuovoV[3];
}
document.addEventListener("DOMContentLoaded",parti)