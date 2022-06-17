// Invert values

/*
Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives.
*/

/*
Example
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
*/

// function invert(array) {
//   if (array == null || array.length == 0) {
//     return [];
//   }
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(-+array[i]);
//   }
//   return newArray;
// }

// 더 좋은 답
const invert = array => array.map(num => -num);

console.log(invert([-1, 2, 3]));
