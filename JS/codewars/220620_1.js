// Find the next perfect square! 7kyu
// Example
/*
121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

// 처음 생각

// function findNextSquare(sq) {
//   const sqrt = Math.sqrt(sq);
//   if (sqrt * sqrt == sq) {
//     return Math.pow(sqrt + 1, 2);
//   } else {
//     return -1;
//   }
// }

// 왜틀렸지..?
// 155 일때 에러

function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);

  if (Number.isInteger(sqrt)) {
    return Math.pow(sqrt + 1, 2);
  } else {
    return -1;
  }
}

console.log(findNextSquare(121));
