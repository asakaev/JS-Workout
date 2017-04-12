
/**
 * Immutable List
 *
 * @param args
 * @constructor
 */
function List(args) {
  if (!(this instanceof List)) {
    return new List(argsToArray(arguments))
  }

  /** @private */
  this.array = Array.isArray(args) ? args : argsToArray(arguments)
}

/**
 * @returns {Boolean}
 */
List.prototype.isEmpty = function() {
  return !this.array.length
}

/**
 * @returns {*}
 */
List.prototype.head = function() {
  return this.array[0]
}

/**
 * @returns {List}
 */
List.prototype.tail = function() {
  return new List(this.array.concat().splice(1))
}

/**
 * @returns {Number}
 */
List.prototype.size = function() {
  return this.array.length
}


// todo: wtf
function argsToArray(argv) {
  return argv.length === 1 ?
    typeof argv[0] === 'string' ? argv[0].split('') : [argv[0]] :
    Array.apply(null, argv)
}


module.exports = { List: List }
