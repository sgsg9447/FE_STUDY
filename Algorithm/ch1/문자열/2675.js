// https://www.acmicpc.net/problem/2675
// 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.

let fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\n");

let testCase = Number(input[0]);

for (let t = 1; t <= testCase; t++) {
  let data = input[t];
  let n = data.split(" ")[0];
  let string = data.split(" ")[1];

  let res = "";
  for (s of string) {
    res += s.repeat(n);
  }
  console.log(res);
}
