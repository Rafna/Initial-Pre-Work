/* Strict Equality operator === does not perform a tyoe conversion unlike
Equality operator ==. If the values being compared have different types
they are considered unequal and the strict Equality operator returns false.
*/
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
