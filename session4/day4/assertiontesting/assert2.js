var assert = require('assert');  
function add (a, b) {  
  return a*a + b*b;  
}  
var expected = add(1,2);  
assert( expected === 2, 'one plus two is three');  