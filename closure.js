for (var i = 0; i < 5; i++) {
  console.log('Inside loop', i);

  /**
   * Function that save context for i variable
   * @param {Number} i
   */
  function f(i) {
    setTimeout(function() {
      console.log('Timeout', i);
    }, 1000);
  }

  f(i);
}

console.log('After loop:', i);
