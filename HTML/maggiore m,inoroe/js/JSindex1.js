function somma(){
    let num1=document.getElementById("i1").value;
    let num2=document.getElementById("i2").value;
    if (num1>num2) {
        document.getElementById("d2").textContent="il primo e maggiore del secondo";
    } else if (num1==num2){
        document.getElementById("d2").textContent="uguali"; 
    } else {
        document.getElementById("d2").textContent="secondo maggiore del eprirmeoo";
    }


    return 0;
}










document.getElementById("b1").addEventListener("click",somma);