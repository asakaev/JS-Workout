
/**
 * @param {!Array.<T>} xs
 * @returns {boolean}
 * @template T
 */
const isEmpty = (xs) => xs.length < 1


/**
 * @param {!Array.<T>} xs
 * @returns {T}
 * @throws {Error}
 * @template T
 */
const head = (xs) => {
  if (isEmpty(xs)) throw new Error('head.empty')
  return xs[0]
}


/**
 * @param {!Array.<T>} xs
 * @returns {Array.<T>}
 * @template T
 */
const tail = (xs) => xs.slice(1, xs.length)


/**
 * @param {!Array.<T>} xs
 * @param {T} x
 * @returns {Array.<T>}
 * @template T
 */
const append = (xs, x) => xs.concat([x])


/**
 * @param {!Array.<T>} xs1
 * @param {!Array.<T>} xs2
 * @returns {Array.<Array.<T>>}
 * @template T
 */
function zip(xs1, xs2) {
  const zipAux = (a, b, acc) =>
    isEmpty(a) || isEmpty(b)
      ? acc
      : zipAux(tail(a), tail(b), append(acc, [head(a), head(b)]))

  return zipAux(xs1, xs2, [])
}


module.exports = {isEmpty, head, tail, append, zip}