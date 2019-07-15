/*Queue is an abstract data structure where items are entered at the back
of the array and items are removed from the front of the array. */
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  item = arr.shift();
  return item;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
