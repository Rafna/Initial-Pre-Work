/* Obtain values from an object using getters and set a value of a property
within an object using setters. Below code shows to get and set temperature
 in Fahrenheit. */
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(tempInF){
      this.tempInF = tempInF;
    }
    get temperature(){
      return this.tempInF;
    }
    set temperature(tempInC) {
      this.tempInF = tempInC * 9.0 / 5 + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
