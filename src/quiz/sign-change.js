
/**
 * @param xs Array.<number>
 * @returns {number}
 */
function signChange(xs) {
  const isEmpty = (xs) => xs.length === 0
  const sameSign = (a, b) => ((a >= 0) && (b >= 0)) || ((a < 0) && (b < 0))

  const count = (xs) => xs.reduce((acc, curr) => {
    return sameSign(acc.prev, curr)
      ? {prev: curr, stack: acc.stack}
      : {prev: curr, stack: acc.stack + 1}
  }, {prev: xs[0], stack: 0})

  return isEmpty(xs) ? 0 : count(xs).stack
}


module.exports = {
  signChange: signChange
};
