// https://www.acmicpc.net/problem/2562
// 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let max = 0;
let maxIndex = 0;
// for (let i = 0; i < 9; i++) {
//   if (max < Number(input[i])) {
//     (max = Number(input[i])), (maxIndex = i + 1);
//   }
// }
// console.log(max);
// console.log(maxIndex);

let data = input.map((x) => Number(x));
let maxV = Math.max(...data);
