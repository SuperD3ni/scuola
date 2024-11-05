let parole=["casa","pomo","more","mare","luna","topo","sale","rosa","cibo","ciao"];
const indiceR = Math.floor(Math.random() * (parole.length ));
let parola=parole[indiceR];
i1=document.getElementById("i1");
l1=document.getElementById("l1");
l2=document.getElementById("l2");
l3=document.getElementById("l3");
l4=document.getElementById("l4");
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

function check(){
    let guess=document.getElementById("i1").value;
    let v = parola.split("");
    let v1 = guess.split("");
    for (let i=0; i<4; i++){
        let l=document.getElementById("l1")
        if (v[i]==v1[i]){
            l.style.backgroundColor="green"
            l.textContent=v[i]
        }
    }
}

document.addEventListener("DOMContentLoaded",parti)
document.getElementById("b1").addEventListener("click",check);