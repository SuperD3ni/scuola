let cell = {number:3, color:"red"}
console.log(`colore della casella: ${cell.color}, numero ${cell.number}`);


let map = new Map([
    [{number:1, color:"white"}, {description: "cella di passaggio", action: null}],
    [{number:2, color:"orange"}, {description: "cella premio", action: () => muovi(2)}],
    [{number:3, color:"yellow"}, {description: "cella premio", action: () => muovi(5)}],
    [{number:4, color:"white"}, {description: "cella di passaggio", action: null}]
]);
let casella = 3;
let oggetto = map.get(1);

function muovi(n){
    console.log(`vai avanti di ${n}`);
}

map.forEach((value, key) => {
    console.log(key.number);
    if (key.number == casella){
        value.action();
    } 
})