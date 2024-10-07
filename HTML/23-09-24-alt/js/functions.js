function cambioBase(){
    console.log(this.value)
}
document.getElementById("base1").addEventListener('change',cambioBase);
document.getElementById("base2").addEventListener('change',cambioBase);
document.getElementById("base3").addEventListener('change',cambioBase);