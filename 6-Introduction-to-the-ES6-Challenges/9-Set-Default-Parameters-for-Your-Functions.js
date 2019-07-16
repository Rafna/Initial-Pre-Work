/* The default parameter kicks in when the argument is not specified. You
can add default values for as many parameters as you want.
 */
 const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
