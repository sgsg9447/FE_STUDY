// https://www.acmicpc.net/problem/2438
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

/*
n = 5
*
**
***
****
*****
*/

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = Number(input[0]);

let res = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    res += "*";
  }
  res += "\n";
}

console.log(res);
