(function f(i) {
  if (i < 30000) {
    // used as mediator to break stack (~15k), setTimeout(fn, 0) much slower
    process.nextTick(function() {
      f(++i);
    });
  } else {
    console.log('Done');
  }
})(0);
