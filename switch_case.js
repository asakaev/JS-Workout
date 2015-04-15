// If multiple cases with one label then only 1st is invoked
// There is no need to 'break' default case

//var a = 0;
var a = 3;

switch (a) {
  case 0:
    console.log('1st');
    break;
  case 0:
    console.log('2nd');
    break;
  default:
    console.log('Default');
  case 3:
    console.log('3rd');
}