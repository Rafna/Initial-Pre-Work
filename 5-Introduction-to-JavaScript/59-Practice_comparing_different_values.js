/* This is an example to show the difference between equality operator and
strict equality operator. If the values being compared are not of same type,
 evaluate the values. However, the strict equality operator will compare
 both data type and value as-is, without converting one type to other.
*/
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
