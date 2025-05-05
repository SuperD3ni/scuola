/*let workers = [{Name: "Paolo", Job: "Manager"}, {Name: "Giovanni", Job: "Marketing"}, {Name: "Marco", Job: "HR"}];
let restaurants = [{Name: "La Bella Vita", City: "Bologna", Region: "Emilia-Romagna"}, {Name: "La Casa della Nonna", City: "Napoli", Region: "Campania"}, {Name: "Sui Monti", City: "Trento", Region: "Trentino Alto Adige"}]
*/
let workers = new Map ([
    ["Paolo", {Name: "Paolo", Job: "Manager"}],
    ["Giovanni", {Name: "Giovanni", Job: "Marketing"}],
    ["Marco", {Name: "Marco", Job: "HR"}]
])

let restaurants = new Map ([
    ["Bologna", {Name: "La Bella Vita", City: "Bologna", Region: "Emilia-Romagna"}],
    ["Napoli", {Name: "La Casa della Nonna", City: "Napoli", Region: "Campania"}], 
    ["Trento", {Name: "Sui Monti", City: "Trento", Region: "Trentino Alto Adige"}]
])

function assign(workers, restaurants) {
    let keys = Array.from(workers.keys());
    let assignations = new Map();
  
    restaurants.forEach((restaurantValue, restaurantKey) => {
      if (keys.length > 0) {
        let workerIndex = Math.floor(Math.random() * keys.length);
        let workerKey = keys[workerIndex];
        assignations.set(workerKey, restaurantValue.Name);
        keys = keys.filter((key, index) => index !== workerIndex);
      }
    });
  
    return assignations;
}

let assignations = assign(workers, restaurants);

function getWorkersByCity(city, workers, restaurants, assignations) {
  let workersInCity = [];

  restaurants.forEach(restaurant => {
    if (restaurant.City === city) {
      assignations.forEach((restaurantName, workerName) => {
        if (restaurantName === restaurant.Name) {
          let worker = workers.get(workerName);
          workersInCity.push({
            name: worker.Name,
            job: worker.Job,
            restaurant: restaurant.Name
          });
        }
      });
    }
  });

  if (workersInCity.length === 0) {
    return `Non ci sono dipendenti assegnati a ristoranti in ${city}.`;
  } else {
    return workersInCity;
  }
}

function printTeamAndRestaurants(workers, restaurants) {
    console.log("Elenco dei Membri del Team:");
    workers.forEach((worker, workerName) => {
      console.log(`- ${worker.Name} (${worker.Job})`);
    });
  
    console.log("\nElenco dei Ristoranti Disponibili:");
    restaurants.forEach(restaurant => {
      console.log(`- ${restaurant.Name} (${restaurant.City}, ${restaurant.Region})`);
    });
  }
  
  printTeamAndRestaurants(workers, restaurants);
  
  let cityToSearch = "Napoli";
  let result = getWorkersByCity(cityToSearch, workers, restaurants, assignations);
  console.log(result);