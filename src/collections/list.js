
/**
 * @param {...T} arguments
 * @returns {List.<T>}
 * @template T
 */
function ListFactory() {
  return Object.values(arguments)
    .reduce((acc, curr) => acc.append(curr), new Nil)
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
   * @returns {T}
   * @template T
   */
  head() { return this._head }

  /**
   * @returns {List.<T>}
   * @template T
   */
  tail() { return this._tail }

  /**
   * Add at the beginning of the list
   * @param x {T}
   * @returns {List.<T>}
   * @template T
   */
  prepend(x) { return new List(x, this) }

  /**
   * Add in front of the list
   * @param x {T}
   * @returns {List.<T>}
   * @template T
   */
  append(x) { // TODO: tailrec?

    /**
     * @param xs {List.<T>}
     * @param x {T}
     * @template T
     */
    const aux = (xs, x) => xs.isEmpty()
      ? new List(x, new Nil)
      : new List(xs.head() , aux(xs.tail(), x))

    return aux(this, x)
  }

  /**
   * @returns {List.<T>}
   * @template T
   */
  reverse() {

    /**
     * @param xs {List.<T>}
     * @param acc {List.<T>}
     * @template T
     */
    const aux = (xs, acc) => xs.isEmpty()
      ? acc
      : aux(xs.tail(), acc.prepend(xs.head()))

    return aux(this, new Nil)
  }

  // ---

  /**
   * @param f {function}
   * @returns {List.<T>}
   * @template T
   */
  map(f) { // TODO: tailrec

    /**
     * @param xs {List.<T>}
     * @param acc {List.<T>}
     * @template T
     */
    const aux = (xs, acc) => xs.isEmpty()
      ? acc
      : new List(f(xs.head()), aux(xs.tail(), acc))

    return aux(this, new Nil)
  }

  /**
   * @param f {function}
   * @param initValue {S}
   * @returns {S}
   * @template T,S
   */
  foldLeft(f, initValue) {

    /**
     * @param xs {List.<T>}
     * @param acc {List.<T>}
     * @template T
     */
    const loop = (xs, acc) => xs.isEmpty()
      ? acc
      : loop(xs.tail(), f(acc, xs.head()))

    return loop(this, initValue)
  }

  /**
   * @returns {List.<T>}
   * @template T
   */
  flatten() {
    const f = (acc, xs) => xs.foldLeft((acc, x) => acc.append(x), acc)
    return this.foldLeft(f, new Nil)
  }

  /**
   * @param sep {string}
   * @returns {string}
   */
  mkString(sep) {
    const f = (acc, curr) => `${acc}${sep}${curr}`
    return this.isEmpty()
      ? ''
      : this.tail().foldLeft(f, this.head())
  }

  /**
   * @returns {string}
   */
  toString() {
    return `List(${this.mkString(', ')})`
  }

}


class Nil extends List {
  constructor() { super(null, null) }

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
