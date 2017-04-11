var mocha = require('mocha')
var assert = require('assert');
var intNotZero = require("../coursera/coursera-01.js").intNotZero
var sum = require("../coursera/coursera-01.js").sum


suite('ListsSuite', function() {

  // Intro

  test("one plus one is two", function() {
    assert(1 + 1 === 2)
  })

  test("one plus one is three?", function() {
    assert(1 + 1 !== 3)
  })

  test('sum of a few numbers', function() {
    assert.equal(14, sum([5, 3, 6]));
  });

  test("intNotZero throws an exception if its argument is 0", function() {
    function block() { intNotZero(0) }
    assert.throws(block, Error)
  })

  // Lists


});
