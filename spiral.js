
function spiral(matrix) {
  return matrix.length === 1 ?
    matrix[0] :
    matrix.shift().concat(spiral(transpose(matrix).reverse()))
}

function transpose(matrix) {
  return Object.keys(matrix[0]).map(function(colNumber) {
    return matrix.map(function(row) {
      return row[colNumber]
    })
  })
}


var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

var outerSpiral = spiral(matrix).reverse()
console.log(outerSpiral)
