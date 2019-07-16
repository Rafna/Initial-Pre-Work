/* In some situations involving array destructuring, we might want to
collect the rest of the elements into a separate array. The rest element
only works correctly as the last variable in the list. As in, you cannot
use the rest operator to catch a subarray that leaves out last element of
 the original array.
*/
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a,b,...arr] = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
