
// Exercise 1


/**
 * @param {Number} c
 * @param {Number} r
 * @returns {Number}
 */
function pascal(c, r) {
  return c === 0 || c === r ?
    1 :
    pascal(c - 1, r - 1) + pascal(c, r - 1)
}


// Exercise 2

/**
 * @param {Array} chars
 * @returns {Boolean}
 */
function balance(chars) {
  return balanceFunc(chars, 0)
}


/**
 * @param {Array} chars
 * @param {Number} level
 * @returns {Boolean}
 */
function balanceFunc(chars, level) {
  return !chars.length ?
    level === 0 :
    chars[0] === '(' ?
      balanceFunc(chars.splice(1), level + 1) :
      chars[0] === ')' ?
        level > 0 && balanceFunc(chars.splice(1), level - 1) :
        balanceFunc(chars.splice(1), level)
}


module.exports = { pascal: pascal, balance: balance }