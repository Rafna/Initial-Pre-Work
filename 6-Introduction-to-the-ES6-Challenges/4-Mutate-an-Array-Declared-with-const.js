/* objects (including arrays and functions) assigned to a variable using
const are still mutable. Using the const declaration only prevents
reassignment of the variable identifier.
*/
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  console.log(s);
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
