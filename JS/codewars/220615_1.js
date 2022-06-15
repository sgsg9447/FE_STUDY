// Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.
/* The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation. */
//
/* ('+', 4, 7) --> 11
   ('-', 15, 18) --> -3 
   ('*', 5, 5) --> 25
   ('/', 49, 7) --> 7 */

function basicOp(operation, value1, value2) {
  if (operation == "+") {
    return value1 + value2;
  } else if (operation == "-") {
    return value1 - value2;
  } else if (operation == "*") {
    return value1 * value2;
  } else if (operation == "/") {
    return value1 / value2;
  }
}

console.log(basicOp("+", 4, 7));

// 더 좋은 답
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}
