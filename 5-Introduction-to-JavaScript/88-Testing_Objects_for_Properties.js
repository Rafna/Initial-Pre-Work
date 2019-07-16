/*To check if a property of an object exists or not, use .hasOwnProperty(propertyName)
 method. If the method returns true, then property exists. */
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if(myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  } else{
    return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");
