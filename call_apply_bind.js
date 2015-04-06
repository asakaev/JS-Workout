var cat = {name: 'Tom'};
var mouse = {name: 'Jerry'};

mouse.sayName = function () {
    return this.name;
};

console.log('Mouse name: ' + mouse.sayName());

var catName = mouse.sayName.call(cat);
console.log('Cat name: ' + catName);