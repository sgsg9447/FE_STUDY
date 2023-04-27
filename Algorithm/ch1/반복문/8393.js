// https://www.acmicpc.net/problem/8393
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let num = Number(input[0]);

// n =3 => 1+2+3;

let cnt = 0;
for (let i = 1; i <= num; i++) {
  cnt += i;
}

console.log(cnt);
