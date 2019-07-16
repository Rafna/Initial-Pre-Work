/* We don't need to name inline functions because we do not reuse them
anywhere else. Write anonymous functions using arrow function syntax.
When there is no function body, and only a return value, arrow function
syntax allows you to omit the keyword return as well as the brackets
surrounding the code.
*/
const magic = () => new Date();
