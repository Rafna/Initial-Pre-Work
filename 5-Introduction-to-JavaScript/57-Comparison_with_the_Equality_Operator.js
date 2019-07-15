/* Equality operator == checks if the right side of the operator is equal to the
left side of the opreator. If it is equal then code in the curly braces will execute.
*/
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
