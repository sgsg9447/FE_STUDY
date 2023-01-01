const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);
const arr5 = new Array(5).fill(5);
//첫번째 파라미터로 초기화 할 배열, 두번째 파라미터로 로직 작성 (배열의값, 인덱스)
const arr6 = Array.from(Array(5), function (v, k) {
  return k + 1;
});

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);
// console.log(arr6);

const arr7 = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr7.length);
arr7.length = 3;
// console.log(arr7);
arr7.length = 10;
// console.log(arr7);

//join
const arr11 = [1, 2, 3, 4, 5, 6];
const arr22 = [7, 8, 9, 10];
console.log(arr11.join(","));

//reverse
console.log(arr11.reverse());
console.log(arr11);

//concat
console.log(arr11.concat(arr22));

//push, pop
const arr = [1, 2, 3, 4, 5, 6];
arr.push(7);

console.log(arr);
arr.pop();
arr.pop();
console.log(arr);

console.log(arr.pop());
console.log(arr);

//shift, unshift

arr.shift();
arr.shift();
console.log(arr);
arr.unshift(10);
console.log(arr);

//slice (시작할 인덱스, 끝날 인덱스)
const arr33 = [1, 2, 3, 4, 5, 6];
console.log(arr33.slice(2, 4));

//splice (인데스, 몇개 삭제할지)
console.log(arr33.splice(2, 2));
console.log(arr33);

//배열의 순회
const arr44 = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < 6; i += 1) {
//   console.log(arr44[i]);
// }
//for of
for (const item of arr44) {
  console.log(item);
}

console.log(typeof arr44);
arr44["key"] = "value";

console.log(arr44);
console.log(arr44.length);
