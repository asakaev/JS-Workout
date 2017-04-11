
function intNotZero(x) {
  if (x === 0) throw new Error('zero is not allowed')
  else return x
}


function sum(list) {
  return !list.length ? 0 : list.shift() + sum(list)
}

function max(list) {
  if (!list.length) throw new Error('NoSuchElementException')
  return list.length > 1 ? maxAux(list.shift(), max(list)) : list.shift()

}

function maxAux(a, b) {
  return a > b ? a : b
}


module.exports = {
  intNotZero: intNotZero,
  sum: sum,
  max: max
}
