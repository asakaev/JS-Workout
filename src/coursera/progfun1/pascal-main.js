var pascal = require('./recfun').pascal

console.log('Pascal\'s triangle')

for (var row = 0; row < 10; row++) {
  for (var col = 0; col < row; col++) {
    process.stdout.write(pascal(col, row) + ' ')
  }
  console.log()
}
