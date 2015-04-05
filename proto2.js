//[1,2,3].duplicate() //[1,2,3,1,2,3]

Array.prototype.duplicate = function () {
    var length = this.length;
    for (var i = 0; i < length; i++) {
        this.push(this[i]);
    }
};

var array = [1, 2, 3];
console.log('Array: ' + JSON.stringify(array));

array.duplicate();
console.log('Duplicated: ' + JSON.stringify(array));