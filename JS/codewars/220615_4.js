// How good are you really?
/*
Now calculate the average and compare your score!
Return True if you're better, else False!
*/

//평균구하는 함수 만들고, 결과가 평균보다 높으면 true, 낮으면 false

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let calAverage = 0;
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  (calAverage = sum / classPoints.length);
  if(yourPoints > calAverage){
      return true;
  }else {
      return false;
  }
  
}


console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))

// 더 좋은 코드

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }