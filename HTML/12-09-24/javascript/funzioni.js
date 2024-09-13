function somma(){
    let num1=document.getElementById("i1").value; 
    let num2=document.getElementById("i2").value; 
    let sum=num1+num2;
    document.getElementById("b2").textContent=sum;
    return 0;
}

document.getElementById("b1").addEventListener("click", somma);