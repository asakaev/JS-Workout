//[1,2,3].duplicate() //[1,2,3,1,2,3]

Array.prototype.duplicate = function () {
    var length = this.length;
    for (var i = 0; i < length; i++) {
        this.push(this[i]);
    }
    return this;
};

console.log('Duplicated array: ' + JSON.stringify([1, 2, 3].duplicate()));