// https://www.acmicpc.net/problem/10818
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
// const max = Math.max(...line);
// const min = Math.min(...line);

// console.log(min, max);

// let min = 10000001;
// let max = -10000001;
// for (let i = 0; i < n; i++) {
//   if (min > arr[i]) min = arr[i];
//   if (max < arr[i]) max = arr[i];
// }

// console.log(min, max);

let min = arr.reduce((a, b) => Math.min(a, b));
let max = arr.reduce((a, b) => Math.max(a, b));
console.log(min, max);
