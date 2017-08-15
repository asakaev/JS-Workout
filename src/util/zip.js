/**
 * @param {!Array} xs1
 * @param {!Array} xs2
 */
function zip(xs1, xs2) {
  const isEmpty = (xs) => xs.length < 1
  const head = (xs) => xs[0]
  const tail = (xs) => xs.splice(1)
  const append = (xs, x) => xs.concat([x])

  const zipAux = (a, b, acc) =>
    isEmpty(a) || isEmpty(b)
      ? acc
      : zipAux(tail(a), tail(b), append(acc, [head(a), head(b)]))

  return zipAux(xs1, xs2, [])
}


module.exports = {zip}
