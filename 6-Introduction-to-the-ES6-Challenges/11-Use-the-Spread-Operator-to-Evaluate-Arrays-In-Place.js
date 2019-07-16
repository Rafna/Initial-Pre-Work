/* spread operator allows us to expand arrays and other expressions in
places where multiple parameters or elements are expected. spread operator
 only works in-place, like in an argument to a function or in an array.
*/
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
