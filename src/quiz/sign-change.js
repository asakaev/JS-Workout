
/**
 * @param xs {!Array.<number>}
 * @returns {number}
 */
function signChange(xs) {
  const isEmpty = (xs) => xs.length === 0
  const head = (xs) => xs[0]
  const tail = (xs) => xs.slice(1, xs.length)

  const sameSign = (a, b) => ((a >= 0) && (b >= 0)) || ((a < 0) && (b < 0))

  const count = (xs, initValue) => {
    const folded = xs.reduce((acc, curr) => {
      return sameSign(acc.prev, curr)
        ? {prev: curr, stack: acc.stack}
        : {prev: curr, stack: acc.stack + 1}
    }, {prev: initValue, stack: 0})

    return folded.stack
  }

  return isEmpty(xs) ? 0 : count(tail(xs), head(xs))
}


module.exports = {signChange: signChange}
