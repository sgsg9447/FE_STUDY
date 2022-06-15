// Keep Hydrated!
/* Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example: 
time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

// 한시간 500미리 0.5리터 
// 3시간 -> 1리터 필요 1.5리터니까 버리기! 
// 6.7시간 -> 6.7 * 0.5 = 3.35 -> 3리터!
// 11.8시간 -> 11.8 * 0.5 = 5.9 -> 5리터! 

function litres(time) {
    return Math.floor(time * 0.5)
  }

console.log(litres(11.8))