/* var keyword used for variable declaration can be overriden with another
value without an error. let keyword used for variable decalrations will cause
error if the same variable is override with another value.*/
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
