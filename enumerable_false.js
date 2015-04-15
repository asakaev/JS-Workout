// Way to make hidden property

var user = {};
user.name = 'Bob';

Object.defineProperty(user, 'pass', {
  enumerable: false,
  value: '12345678'
});



console.log(JSON.stringify(user)); // {"name":"Bob"}
console.log(user.pass); // 12345678