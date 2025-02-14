//--------------------------Example 1----------------------------------------------------
// const car = {
//     speed: 100,
//     color: "blue"
// }

// for(prop of car) {
//     console.log(prop)
// }
// Throws a type error because objects are not iterable

//--------------------------Example 2----------------------------------------------------
const colors = ['red', 'orange', 'yellow']
for (var color of colors) {
    console.log(color);
}

//--------------------------Example 3----------------------------------------------------
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

//--------------------------Example 4----------------------------------------------------
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

//--------------------------Example 5----------------------------------------------------
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); // [ ['speed', 400], ['color', 'magenta'] ]

//--------------------------Example 6----------------------------------------------------
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

//--------------------------Example 7----------------------------------------------------
const car = {
    speed: "slow",
    steering: true,
    engine: true,
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
// print the properties of sportsCar
console.log(sportsCar);
// using for in
console.log("Iterating over object and its prototype properties")
for (const prop in sportsCar) {
    console.log(prop, sportsCar[prop]);
}
// using for of
console.log("Iterating over object properties only")
for (const prop of Object.keys(sportsCar)) {
    console.log(prop, sportsCar[prop]);
}

//--------------------------Example 8----------------------------------------------------
