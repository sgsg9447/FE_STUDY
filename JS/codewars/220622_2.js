// Sum without highest and lowest number 8kyu

/*
Task
Sum all the numbers of a given array ( cq. list ), 
except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, 
even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
*/

// max 값 찾고, min 값 찾고 그것아닌 새배열 푸쉬 sum!

// function sumArray(array) {
//   let maxValue = Math.max.apply(null, array);
//   let minValue = Math.min.apply(null, array);
//   console.log(maxValue);
// }

// console.log(sumArray([1,2,3]))

function sumArray(array) {
  if (array == null || array.length <= 2) {
    return 0;
  }

  var max = Math.max.apply(Math, array);
  var min = Math.min.apply(Math, array);
  var sum = 0;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum - max - min;
}
