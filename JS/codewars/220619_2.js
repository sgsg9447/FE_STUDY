// Beginner Series #2 Clock

/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0 => 1시간 -> 60*60=3,600,000ms
m = 1 => 1분 -> 60,000ms
s = 1 => 1초 -> 1,000ms

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59


(0,1,1) => 61000
(1,1,1) => 3661000
(0,0,0) => 0
(1,0,1) => 3601000
(1,0,0) => 3600000
*/

function past(h, m, s) {
  h = 3600000 * h;
  m = 60000 * m;
  s = 1000 * s;
  return h + m + s;
}

console.log(past(1,1,1))