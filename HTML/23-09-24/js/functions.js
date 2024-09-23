function ready(){
    let s="A";
    console.log(s.charCodeAt(0))
    n=s.charCodeAt(0)
    console.log(String.fromCharCode(n))
    n++
    console.log(String.fromCharCode(n))
}
document.addEventListener("DOMContentLoaded", ready)