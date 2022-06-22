// Is this a triangle? (7kyu)

/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

// 세 변의 길이를 알 때 (가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 삼각형)
*/

// 처음 생각한 오답
// function isTriangle(a, b, c) {
//   if (a > b || a > c) {
//     if (a < b + c) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

//정답
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

console.log(isTriangle(1, 2, 2)); //true
console.log(isTriangle(7, 2, 2)); //false
