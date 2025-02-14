/* One key difference between the spread operator and array destructuring
 is that the spread operator unpacks all contents of an array into a
 comma-separated list. Consequently, you cannot pick or choose which
 elements you want to assign to variables.
*/
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a,b] = [b,a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
