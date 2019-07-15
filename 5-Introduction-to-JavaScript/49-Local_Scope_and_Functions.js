/* Variables which are declared within a function, as well as the
function parameters have local scope. That means, they are only visible
within that function.
*/
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "local Variable";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);

// Now remove the console log line to pass the test
