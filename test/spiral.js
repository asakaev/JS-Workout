var mocha = require('mocha')
var suite = mocha.suite
var test = mocha.test
var assert = require('assert')
var outerSpiral = require('../spiral.js').outerSpiral
var spiral = require('../spiral.js').spiral


suite('SpiralSuite', function() {

  var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]


  test('spiral', function() {
    assert.deepEqual([1, 2, 3, 6, 9, 8, 7, 4, 5], spiral(matrix))
  })

  test('outer spiral', function() {
    assert.deepEqual([5, 4, 7, 8, 9, 6, 3, 2, 1], outerSpiral(matrix))
  })

})
