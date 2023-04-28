// https://www.acmicpc.net/problem/3052
// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// let data = input.map((x) => Number(x));

// let data2 = data.map((d) => d % 42);

// let set = new Set(data2);

// console.log(set.size);

let data = input.map(Number);

let mySet = new Set();

for (let i = 0; i < 10; i++) {
  mySet.add(data[i] % 42);
}

console.log(mySet.size);
