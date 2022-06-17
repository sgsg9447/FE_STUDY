// Count of positives / sum of negatives

/*
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.

*/

/*
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(arr) {
  if (arr == null || arr.length == 0) {
    return [];
  }

  let positive = 0;
  let negative = 0;
  for (let i = 0, l = arr.length; i < l; i++) {
    if (arr[i] > 0) {
      positive++;
    } else {
      negative += arr[i];
    }
  }
  return [positive, negative];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
