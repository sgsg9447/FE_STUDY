// https://www.acmicpc.net/problem/2908
// 첫째 줄에 상근이가 칠판에 적은 두 수 A와 B가 주어진다. 두 수는 같지 않은 세 자리 수이며, 0이 포함되어 있지 않다.
// 그 다음에 크기가 큰 수를 말해보라고 했다.
// 상수는 수를 다른 사람과 다르게 거꾸로 읽는다. 예를 들어, 734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다. 따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.
// 두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
// let [a, b] = input[0].split("  ");

// const reverseA = Number(a.split("").reverse().join(""));
// const reverseB = Number(b.split("").reverse().join(""));

// console.log(reverseA, reverseB);

// if (reverseA < reverseB) {
//   console.log(reverseB);
// } else {
//   console.log(reverseA);
// }

let a = input[0].split(" ")[0];
let b = input[0].split(" ")[[1]];

let newA = a[2] + a[1] + a[0];
let newB = b[2] + b[1] + b[0];
console.log(Math.max(Number(newA), Number(newB)));
