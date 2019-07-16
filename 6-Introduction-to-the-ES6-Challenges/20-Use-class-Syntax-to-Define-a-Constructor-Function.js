/* the class keyword declares a new function, and a constructor was added,
 which would be invoked when new is called - to create a new object.*/
 function makeClass() {
   "use strict";
   /* Alter code below this line */
   class Vegetable {
     constructor(name){
       this.name = name;
     }
   }
   /* Alter code above this line */
   return Vegetable;
 }
 const Vegetable = makeClass();
 const carrot = new Vegetable('carrot');
 console.log(carrot.name); // => should be 'carrot'
