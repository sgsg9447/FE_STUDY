// https://www.acmicpc.net/problem/2739
// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

// 2 => 2 * 1  = 2; 2 * 2 = 4 ; ~~~ 2 * 9 = 18;

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let a = Number(input[0]);

for(let i=1; i <10; i++){
    console.log(`${a} * ${i} = ${a*i}`)
}
