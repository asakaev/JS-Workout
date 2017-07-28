// TODO: SeqFactory varargs JSDoc


/**
 * @returns {List}
 */
function ListFactory() {
  const size = arguments.length
  const toList = (xs, i) => i === size
    ? new Nil()
    : new List(xs[i], toList(xs, i + 1))

  return toList(arguments, 0)
}


class List {

  /**
   * @param head {T}
   * @param tail {List.<T>}
   * @template T
   */
  constructor(head, tail) {
    this._head = head
    this._tail = tail
  }

  /**
   * @returns {boolean}
   */
  isEmpty() { return false }

  /**
   * @returns T
   */
  head() { return this._head }

  /**
   * @returns {List.<T>}
   */
  tail() { return this._tail }

  /**
   * Add at the beginning of the list
   * @param x {*}
   * @returns {List}
   */
  prepend(x) { return new List(x, this) }

  /**
   * Add in front of the list
   * @param x {*}
   * @returns {List}
   */
  append(x) { // TODO: tailrec?

    /**
     * @param xs {List.<*>}
     * @param x {*}
     */
    const aux = (xs, x) => xs.isEmpty()
      ? new List(x, new Nil)
      : new List(xs.head() , aux(xs.tail(), x))

    return aux(this, x)
  }

  /**
   * @returns {List.<*>}
   */
  reverse() {

    /**
     * @param xs {List.<*>}
     * @param acc {List.<*>}
     */
    const aux = (xs, acc) => xs.isEmpty()
      ? acc
      : aux(xs.tail(), acc.prepend(xs.head()))

    return aux(this, new Nil)
  }

  // ---

  /**
   * @param f {function}
   * @returns {List.<*>}
   */
  map(f) { // TODO: tailrec

    /**
     * @param xs {List.<*>}
     * @param acc {List.<*>}
     */
    const aux = (xs, acc) => xs.isEmpty()
      ? acc
      : new List(f(xs.head()), aux(xs.tail(), acc))

    return aux(this, new Nil)
  }

  /**
   * @param f {function}
   * @param initValue {*}
   * @returns {*}
   */
  foldLeft(f, initValue) {
    const loop = (xs, acc) => xs.isEmpty()
      ? acc
      : loop(xs.tail(), f(acc, xs.head()))

    return loop(this, initValue)
  }

}


class Nil extends List {

  /**
   * @returns {boolean}
   */
  isEmpty() { return true }

  head() { throw new Error('Nil.head') }
  tail() { throw new Error('Nil.tail') }
}


module.exports = {
  ListFactory: ListFactory,
  Nil: Nil,
  List: List
}
