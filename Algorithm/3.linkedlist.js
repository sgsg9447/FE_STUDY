// function solution(s){
//     var answer = true;
//     const arr = []
//         arr.push(s)

//     if (arr.length % 2 === 0){
//             if(arr[0] === "("){
//                 if(arr[arr.length -1] ===")"){
//                      answer = true
//                 } else{
//                  answer = false}
//             }else {
//                  answer = false
//             }
//         } else{
//              answer = false
//         }

//     // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
//     console.log('Hello Javascript')

//     return answer;
// }

function solution(s) {
  const stack = [];
  //"(" 나오면 stack에 push,
  // ")" 나오면 stack에 pop
  // stack.length === 0 ? true : false
  for (const c of s) {
    if (c === "(") {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
    console.log(stack);
    return stack.length === 0;
  }
}

function solution(s) {
  let count = 0;
  for (const c of s) {
    if (c === "(") {
      count += 1;
    } else {
      if (count === 0) {
        return false;
      }
      count -= 1;
    }
  }
  return count === 0;
}

solution(["(", "(", "(", ")"]);




