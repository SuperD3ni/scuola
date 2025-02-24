const map = new Map()

map.set('chiaveStringa', 'valore');

map.set(42, 'valoreNumerico');

map.set({ nome: 'Oggetto' }, 'valoreOggetto');
console.log(map);


const map1 = new Map([
    ['chiaveStringa', 'valore'],
    [43, 'valoreNumerico'],
    [{ nome: 'Oggetto' }, 'valoreOggetto']
]);
console.log(map1);