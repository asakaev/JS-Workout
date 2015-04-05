function Animal(name) {
    this.name = name;
    this.canWalk = true;
}

var animal = new Animal('Abstract animal');

console.log('Animal name: %s', animal.name);
console.log('It can walk: %s', animal.canWalk);
console.log('animal instance of Animal: %s\n', animal instanceof Animal);

function Rabbit(name) {
    this.name = name
}

Rabbit.prototype = animal;

var big = new Rabbit('Chuk');
var small = new Rabbit('Gek');
small.canWalk = false;

console.log('Big rabbit name: %s', big.name);
console.log('It can walk: %s\n', big.canWalk);

console.log('Small rabbit name: %s', small.name);
console.log('It can walk: %s', small.canWalk);