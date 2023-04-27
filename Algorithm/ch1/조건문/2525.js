// https://www.acmicpc.net/problem/2525
// 훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let c = Number(input[1]);

// a 현재 시
// b 현재 분
// c 요리시간

// 14 30 현재 14시 30분
// 20 요리시간 20분

// 완료시간은 ?
// 14시 50분
// 17시 40분 +80분 =>  19시 0

//분으로 다 바꾸기
// a = 14시 => 14 * 60 = 840분
// b = 30분
// c = 20분
// total = a+b+c  890분
// 시 분으로 나누기
// 890/60 몫 => 시
// 890%60 나머지 => 시

let totalTime = a * 60 + b + c;
//17*60 + 40 + 80 = 1140
totalTime = totalTime % 1440;
//1140 % 1440;
let h = parseInt(totalTime / 60);
let m = totalTime % 60;
console.log(h + " " + m);
