function verifica() {
    let i;
    let vocali = 0;
    let i1 = document.getElementById("i1").value;
    
    for (i of i1.toLowerCase()) {
        if ("aeiou".includes(i)) {
            vocali+=1;
        }
    }
    if (vocali > 0) {
        document.getElementById("d2").textContent = vocali
    } else {
        document.getElementById("d2").textContent = "no vocali";
    }
    return 0;
}

document.getElementById("attiva").addEventListener("click", verifica);