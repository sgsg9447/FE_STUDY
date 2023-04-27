//https://www.acmicpc.net/problem/9498
//시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const data = Number(input[0]);

let grade;

function checkGrade(data) {
  if (90 <= data && data <= 100) {
    grade = "A";
  } else if (80 <= data && data <= 89) {
    grade = "B";
  } else if (70 <= data && data <= 79) {
    grade = "C";
  } else if (60 <= data && data <= 69) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}
console.log(checkGrade(data));
