//https://www.acmicpc.net/problem/2884
//바로 "45분 일찍 알람 설정하기"이다.

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let line = input[0].split(" ");

let h = parseInt(line[0]);
let m = parseInt(line[1]);

if (m < 45) {
  h -= 1;
  m += 15;
  if (h < 0) h = 23;
} else {
  m -= 45;
}

console.log(h + " " + m);
