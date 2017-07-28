
function spiral(matrix) {
  var m = Array.from(matrix)
  return matrix.length === 1 ?
    m[0] :
    m.shift().concat(spiral(transpose(m).reverse()))
}

function outerSpiral(matrix) {
  return spiral(matrix).reverse()
}

function transpose(matrix) {
  return Object.keys(matrix[0]).map(function(colNumber) {
    return matrix.map(function(row) {
      return row[colNumber]
    })
  })
}


module.exports = { spiral: spiral, outerSpiral: outerSpiral }
