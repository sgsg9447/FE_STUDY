// https://www.acmicpc.net/problem/4344
// 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

let fs = require("fs");

let input = fs.readFileSync("input.txt").toString().split("\n");

const testCase = Number(input[0]);

// let line = input[1].split(" ").map(Number);
// let n = line[0];

// let avg = 0;

// for (let t = 1; t <= testCase; t++) {
//   let data = input[t].split(" ").map(Number);
//   let n = data[0];
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += data[i];
//   }
//   let avg = sum / n;
//   let cnt = 0;
//   for (let i = 1; i <= n; i++) {
//     if (data[i] > avg) cnt += 1;
//   }
//   console.log(`${((cnt / n) * 100).toFixed(3)}%`);
// }


for(let t=1; t<=testCase;t++){
    let data = input[t].split(' ').map(Number)
    let n = data[0]
    let sum = 0;
    for(let i=1; i<=n;i++){
        sum += data[i]
    }
    let avg = sum/n
    let cnt = 0;
    for(let i=1; i<=n;i++){
        if(data[i]>avg)cnt +=1
    }
    console.log(`${(cnt/n*100).toFixed(3)}%`)
}