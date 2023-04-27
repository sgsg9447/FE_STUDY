// https://www.acmicpc.net/problem/2480
// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

// 3 3 6
// 1000원 + (3*100) = 1300원
// 2 2 2
// 10000원 + (2*1000) = 12000원
// 6 2 5
// 600

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let [a, b, c] = input[0].split(" ").map(Number);
console.log(a, b, c);
if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b) {
  console.log(1000 + a * 100);
} else if (a === c) {
  console.log(1000 + a * 100);
} else if (b === c) {
  console.log(1000 + b * 100);
} else {
  console.log(Math.max(a, b, c) * 100);
}
