var mocha = require('mocha')
var suite = mocha.suite
var test = mocha.test
var assert = require('assert')

var List = require('../../../src/collections/list-naive').List
var balance = require('../../../src/coursera/progfun1/recfun').balance


suite('BalanceSuite', function() {

  test('balance: \'(if (zero? x) max (/ 1 x))\' is balanced', function() {
    assert(balance(List('(if (zero? x) max (/ 1 x))')))
  })

  test('balance: \'I told him ...\' is balanced', function() {
    assert(balance(List('I told him (that it\'s not (yet) done).\n(But he wasn\'t listening)')))
  })

  test('balance: \':-)\' is unbalanced', function() {
    assert(!balance(List(':-)')))
  })

  test('balance: counting is not enough', function() {
    assert(!balance(List('())(')))
  })

})
