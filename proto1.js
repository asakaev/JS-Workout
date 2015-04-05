// Implementing `.delay` method

//var foo = function () {
//    console.log("bingo!");
//};
//
//foo.delay(3000); // after 0.3s: "bingo!"
//bar.delay(6000); // after 0.6s: "Wow!"
//
//function bar() {
//    console.log("Wow!");
//}

Function.prototype.delay = function (time) {
    setTimeout(this, time);
};

var foo = function () {
    console.log('bingo!');
};

function bar() {
    console.log('Wow!');
}

foo.delay(3000);
bar.delay(6000);
console.log('Start');