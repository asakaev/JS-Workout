var mocha = require('mocha')
var suite = mocha.suite
var test = mocha.test
var assert = require('assert')

var pascal = require('../../../src/coursera/progfun1/recfun').pascal


suite('PascalSuite', function() {

  test('pascal: col=0,row=2', function() {
    assert(pascal(0,2) === 1)
  })

  test('pascal: col=1,row=2', function() {
    assert(pascal(1,2) === 2)
  })

  test('pascal: col=1,row=3', function() {
    assert(pascal(1,3) === 3)
  })

})
