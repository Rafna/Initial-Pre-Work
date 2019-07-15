/* two reasons to use escaping characters are
 - allow to use characters we might not otherwise be able to type out,
 such as a backspace.
 - allow to represent multiple quotes in a string without JavaScript
 misinterpreting what we mean.
 Below is an example of using different escape characters in one string
 variable. */
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
