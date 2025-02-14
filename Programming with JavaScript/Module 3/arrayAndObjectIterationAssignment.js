// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (const item of dairy) {
    console.log(item);
}
}

// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(){
    for (const prop of Object.keys(bird)) {
        console.log(prop + ':' + " " + bird[prop])
    }
}

// Task 3
function animalCan() {
    for (const prop in bird) {
        console.log(prop + ":" + " " + bird[prop])
    }
}
logDairy();
birdCan();
animalCan();
