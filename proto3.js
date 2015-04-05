function Animal(name) {
    this.name = name;
    this.canWalk = true;

    this.sayName = function () {
        return 'My name is ' + this.name;
    };
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
console.log('It can walk: %s\n', small.canWalk);

console.log('Animal prototype: %s', JSON.stringify(Animal.prototype));
console.log('Rabbit prototype: %s', JSON.stringify(Rabbit.prototype));

Animal.prototype.sayNameYo = function () {
    return 'Yo, my name is ' + this.name;
};

console.log(big.sayName());
console.log(small.sayNameYo());