const mocha = require('mocha')
const suite = mocha.suite
const test = mocha.test
const assert = require('assert')

const signChange = require('../../src/quiz/sign-change').signChange
const signChangeZip = require('../../src/quiz/sign-change').signChangeZip


suite('SignChangeSuite', function() {

  test('empty data', function() {
    assert.equal(signChange([]), 0)
    assert.equal(signChangeZip([]), 0)
  })

  test('one positive element', function() {
    assert.equal(signChange([1]), 0)
    assert.equal(signChangeZip([1]), 0)
  })

  test('one negative element', function() {
    assert.equal(signChange([-1]), 0)
    assert.equal(signChangeZip([-1]), 0)
  })

  test('zeroes', function() {
    assert.equal(signChange([0, 0]), 0)
    assert.equal(signChangeZip([0, 0]), 0)
  })

  test('datasets', function() {
    assert.equal(signChange([-1, 0]), 1)
    assert.equal(signChange([-1, -1]), 0)
    assert.equal(signChange([0, -1]), 1)
    assert.equal(signChange([-1, 1]), 1)
    assert.equal(signChange([1, -1]), 1)

    assert.equal(signChangeZip([-1, 0]), 1)
    assert.equal(signChangeZip([-1, -1]), 0)
    assert.equal(signChangeZip([0, -1]), 1)
    assert.equal(signChangeZip([-1, 1]), 1)
    assert.equal(signChangeZip([1, -1]), 1)
  })

})
