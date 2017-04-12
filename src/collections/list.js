
/**
 * Immutable List
 *
 * @param {?Array} array
 * @constructor
 */
function List(array) {
  this.array = Array.isArray(array) ? array : Array.from(arguments)
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


/**
 * @param param
 * @returns {List}
 */
function ListCompanion(param) {
  if (typeof param === 'string') {
    return new List(param.split(''))
  } else if (Array.isArray(param)) {
    return new List(param)
  } else {
    return new List(Array.from(arguments))
  }
}


module.exports = { List: ListCompanion }
