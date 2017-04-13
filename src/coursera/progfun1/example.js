
/**
 * @param {Number} x
 * @returns {Number}
 */
function intNotZero(x) {
  if (x === 0) throw new Error('zero is not allowed')
  else return x
}

/**
 * @param {List} list
 * @returns {Number}
 */
function sum(list) {
  return list.isEmpty() ? 0 : list.head() + sum(list.tail())
}

/**
 * @param {List} list
 * @returns {Number}
 */
function max(list) {
  if (list.isEmpty()) throw new Error('NoSuchElementException')
  return list.tail().isEmpty() ? list.head() : maxAux(list.head(), max(list.tail()))
}

/**
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function maxAux(a, b) {
  return a > b ? a : b
}


module.exports = {
  intNotZero: intNotZero,
  sum: sum,
  max: max
}
