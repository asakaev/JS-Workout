var mocha = require('mocha')
var suite = mocha.suite
var test = mocha.test

var assert = require('assert')
var intNotZero = require('../coursera/coursera-01.js').intNotZero
var sum = require('../coursera/coursera-01.js').sum


suite('ListsSuite', function() {

  // Intro

  test('one plus one is two', function() {
    assert(1 + 1 === 2)
  })

  test('one plus one is three?', function() {
    assert(1 + 1 !== 3)
  })

  test('sum of a few numbers', function() {
    assert.equal(14, sum([5, 3, 6]))
  })

  test('intNotZero throws an exception if its argument is 0', function() {
    function block() { intNotZero(0) }
    assert.throws(block, Error)
  })

  // Lists

  test('sum of a few numbers', function() {
    assert(sum([1, 2, 0]) === 3)
  })

  test('sum of zeroes', function() {
    assert(sum([0, 0, 0]) === 0)
  })

  test('sum of negative', function() {
    assert(sum([-5, 5, 2]) === 2)
  })

  test('sum of none', function() {
    assert(sum([]) === 0)
  })

  test('sum of ones', function() {
    assert(sum([1, 1, 1]) === 3)
  })

})
