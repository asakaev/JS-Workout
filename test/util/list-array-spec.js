const mocha = require('mocha')
const suite = mocha.suite
const test = mocha.test
const assert = require('assert')

const isEmpty = require('../../src/util/list-array').isEmpty
const tail = require('../../src/util/list-array').tail
const head = require('../../src/util/list-array').head
const zip = require('../../src/util/list-array').zip


suite('isEmptySuite', function() {
  test('empty collection', function() {
    assert.equal(isEmpty([]), true)
  })

  test('non empty collection', function() {
    assert.equal(isEmpty([1]), false)
  })
})


suite('headSuite', function() {
  test('empty collection', function() {
    assert.equal(head([]), undefined) // TODO: exception
  })

  test('non empty collection', function() {
    assert.equal(head([1, 2]), 1)
  })
})


suite('tailSuite', function() {
  test('empty collection', function() {
    assert.deepEqual(tail([]), []) // TODO: exception
  })

  test('non empty collection', function() {
    assert.deepEqual(tail([1, 2, 3]), [2, 3])
  })
})


suite('zipSuite', function() {
  test('collections with same size', function() {
    const xs1 = [1, 2, 3]
    const xs2 = [4, 5, 6]
    const expected = [[1, 4], [2, 5], [3, 6]]
    assert.deepEqual(zip(xs1, xs2), expected)
  })

  test('both empty collections', function() {
    const xs1 = []
    const xs2 = []
    const expected = []
    assert.deepEqual(zip(xs1, xs2), expected)
  })

  test('first empty, second non empty', function() {
    const xs1 = [1, 2, 3]
    const xs2 = []
    const expected = []
    assert.deepEqual(zip(xs1, xs2), expected)
  })

  test('first non empty, second empty', function() {
    const xs1 = []
    const xs2 = [1, 2, 3]
    const expected = []
    assert.deepEqual(zip(xs1, xs2), expected)
  })

  test('different size', function() {
    const xs1 = [1, 2, 3, 4]
    const xs2 = [5, 6]
    const expected = [[1, 5], [2, 6]]
    assert.deepEqual(zip(xs1, xs2), expected)
  })
})
