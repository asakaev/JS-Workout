
/**
 * @param {Number} x
 * @returns {Number}
 */
function intNotZero(x) {
  if (x === 0) throw new Error('zero is not allowed')
  else return x
}

/**
 * @param {Array} list
 * @returns {Number}
 */
function sum(list) {
  return !list.length ? 0 : list.shift() + sum(list)
}

/**
 * @param {Array} list
 * @returns {Number}
 */
function max(list) {
  if (!list.length) throw new Error('NoSuchElementException')
  return list.length > 1 ? maxAux(list.shift(), max(list)) : list.shift()

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
