/*  variables declared using const are read-only. They are a constant
value, which means that once a variable is assigned with const, it cannot
 be reassigned. A common practice when naming constants is to use all
 uppercase letters, with words separated by an underscore.
*/
function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
