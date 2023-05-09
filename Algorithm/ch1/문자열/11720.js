// https://www.acmicpc.net/problem/11720
// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = Number(input[0]);
let string = input[1];

console.log(n);
console.log(string);

let sum = 0;
for (let s of string) {
  sum += Number(s);
}

console.log(sum);
