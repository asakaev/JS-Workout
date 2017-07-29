const mocha = require('mocha')
const suite = mocha.suite
const test = mocha.test
const assert = require('assert')

const ListFactory = require('../../src/collections/list').ListFactory
const Nil = require('../../src/collections/list').Nil


suite('ListSuite', function() {

  test('empty list', function() {
    const xs = ListFactory()
    assert.equal(xs.isEmpty(), true)
    assert.deepEqual(xs, new Nil)
    assert.throws(_ => xs.head())
  })

  test('list of 1 element', function() {
    const xs = ListFactory(1)
    assert.equal(xs.isEmpty(), false)
    assert.equal(xs.head(), 1)
    assert.deepEqual(xs.tail(), new Nil)
    assert.throws(_ => xs.tail().head())
  })

  test('list of 2 elements', function() {
    const xs = ListFactory(1, 2)
    assert.equal(xs.isEmpty(), false)
    assert.equal(xs.head(), 1)
    assert.deepEqual(xs.tail(), ListFactory(2))
    assert.throws(_ => xs.tail().tail().head())
  })

  test('prepend', function() {
    const xs = ListFactory(1).prepend(2)
    assert.equal(xs.isEmpty(), false)
    assert.deepEqual(xs, ListFactory(2, 1))
  })

  test('append', function() {
    const xs = ListFactory(1).append(2)
    assert.equal(xs.isEmpty(), false)
    assert.deepEqual(xs, ListFactory(1, 2))
  })

  test('reverse', function() {
    const xs = ListFactory(1, 2).reverse()
    assert.equal(xs.isEmpty(), false)
    assert.deepEqual(xs, ListFactory(2, 1))
  })

  test('map', function() {
    const xs = ListFactory(1, 2).map(x => x * 2)
    assert.equal(xs.isEmpty(), false)
    assert.deepEqual(xs, ListFactory(2, 4))
  })

  test('foldLeft', function() {
    const xs = ListFactory(1, 2)
    const empty = ListFactory()
    const res1 = xs.foldLeft((a, b) => a + b, 0)
    const res2 = xs.foldLeft((a, b) => a * b, 1)
    const res3 = empty.foldLeft((a, b) => a + b, 0)
    const res4 = empty.foldLeft((a, b) => a * b, 2)
    assert.equal(res1, 3)
    assert.equal(res2, 2)
    assert.equal(res3, 0)
    assert.equal(res4, 2)
  })

  test('flatten', function() {
    const xs = ListFactory(ListFactory(1, 2), ListFactory(3, 4))
    const xs2 = ListFactory(ListFactory(), ListFactory())
    assert.deepEqual(xs.flatten(), ListFactory(1, 2, 3, 4))
    assert.deepEqual(xs2.flatten(), ListFactory())
  })

  test('mkString', function() {
    const xs = ListFactory(1, 2)
    const empty = ListFactory()
    assert.equal(xs.mkString(''), '12')
    assert.equal(xs.mkString(', '), '1, 2')
    assert.equal(empty.mkString(':'), '')
  })

  test('toString', function() {
    const xs = ListFactory(1, 2)
    const empty = ListFactory()
    assert.equal(xs.toString(), 'List(1, 2)')
    assert.equal(empty.toString(), 'List()')
  })

})
