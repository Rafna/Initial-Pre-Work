//Ternary operator can be used as mulitple conditional operator in single line.
function checkSign(num) {
  return (num == 0)? "zero" : (num > 0)? "positive" : "negative";
}

checkSign(10);
