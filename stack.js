// If comment 1st console.log then unusual behavor in catch
// If not comment you can't get anything inside catch

(function f(n) {
  console.log(n);

  try {
    f(++n);
  }
  catch (e) {
    // console.log(n);
    // process.stdout.write('n: ' + n);
  }
})(0);