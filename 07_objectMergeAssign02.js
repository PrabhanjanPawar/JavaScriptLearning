const car={
    carName : "Creta SX",
    company : "Hundai",
    launchYear : "2017",
}

const carEngine = {
    enginePower : "1499CC",
    maxPower : "113 BHP",
}

console.log(`Merge "car" & "carEngine" objects using "assign" Operator`);
let concat = Object.assign(car, carEngine);
console.log(concat);

let mergeCarEngine = {...car, ...carEngine};
console.log(`Merge "car" & "carEngine" objects using "...spread" Operator`);
console.log(mergeCarEngine);