
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
 * @param {List} chars
 * @returns {Boolean}
 */
function balance(chars) {
  return balanceFunc(chars, 0)
}


/**
 * @param {List} chars
 * @param {Number} level
 * @returns {Boolean}
 */
function balanceFunc(chars, level) {
  return chars.isEmpty() ?
    level === 0 :
    chars.head() === '(' ?
      balanceFunc(chars.tail(), level + 1) :
      chars.head() === ')' ?
        level > 0 && balanceFunc(chars.tail(), level - 1) :
        balanceFunc(chars.tail(), level)
}


module.exports = { pascal: pascal, balance: balance }
