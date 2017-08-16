const isEmpty = require('../util/list-array').isEmpty
const head = require('../util/list-array').head
const tail = require('../util/list-array').tail
const zip = require('../util/list-array').zip


/**
 * @param {number} a
 * @param {number} b
 * @returns {boolean}
 */
const sameSign = (a, b) => ((a >= 0) && (b >= 0)) || ((a < 0) && (b < 0))


/**
 * @param xs {!Array.<number>}
 * @returns {number}
 */
function signChange(xs) {
  const Acc = (prev, stack) => { return {prev, stack} }

  const count = (xs, initValue) => {
    const f = ({prev, stack}, curr) => sameSign(prev, curr)
      ? Acc(curr, stack)
      : Acc(curr, stack + 1)

    return xs.reduce(f, Acc(initValue, 0)).stack
  }

  return isEmpty(xs) ? 0 : count(tail(xs), head(xs))
}


/**
 * @param xs {!Array.<number>}
 * @returns {number}
 */
const signChangeZip = xs => zip(xs, tail(xs))
  .map(([t1, t2]) => !sameSign(t1, t2))
  .filter(_ => _ === true)
  .reduce(_ => _ + 1, 0)


module.exports = {signChange, signChangeZip}
