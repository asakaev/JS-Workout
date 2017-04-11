
function intNotZero(x) {
    if (x === 0) throw new Error('zero is not allowed')
    else return x
}


function sum(list) {
  return !list.length ? 0 : list.shift() + sum(list)
}

module.exports = {
  intNotZero: intNotZero,
  sum: sum
}
