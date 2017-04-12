var mocha = require('mocha')
var suite = mocha.suite
var test = mocha.test
var assert = require('assert')

var balance = require('../coursera/progfun1-recfun').balance


suite('BalanceSuite', function() {

  test('balance: \'(if (zero? x) max (/ 1 x))\' is balanced', function() {
    assert(balance('(if (zero? x) max (/ 1 x))'.split('')))
  })

  test('balance: \'I told him ...\' is balanced', function() {
    assert(balance('I told him (that it\'s not (yet) done).\n(But he wasn\'t listening)'.split('')))
  })

  test('balance: \':-)\' is unbalanced', function() {
    assert(!balance(':-)'.split('')))
  })

  test('balance: counting is not enough', function() {
    assert(!balance('())('.split('')))
  })

})
