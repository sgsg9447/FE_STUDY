//Beginner - Lost Without a Map 8kyu

/*

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]


*/

function maps(x) {
  const newArr = [];
  for (let i = 0; i < x.length; i++) {
    newArr.push(x[i] * 2);
  }
  return newArr;
}


//더 좋은 답!
function maps(x) {
    return x.map((n) => n * 2);
}

maps([1, 2, 3]);