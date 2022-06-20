// Remove the minimum

/*
Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

//실패
function removeSmallest(numbers) {
  //최솟값 찾기
  const min = Math.min(...numbers);
  //최솟값 index찾기
  const index = numbers.indexOf(min);
  //배열 splice
  console.log(...numbers.splice(0, index));
  // console.log(...numbers.splice(index + 1));
  return [...numbers.slice(0, index), ...numbers.slice(index + 1)];
}

//정답
function removeSmallest(numbers) {
  //최솟값 찾기
  const indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.splice(0, indexOfMin), ...numbers.splice(indexOfMin + 1)];
}

console.log(removeSmallest([1, 2, 3, 4, 5]));

//어이없게.. slice 와 splice 헷갈려서 틀림..............

/*
[1] Array​.prototype​.slice()
slice() 메소드는 begin부터 end 전까지의 복사본을 새로운 배열 객체로 반환한다. 즉, 원본 배열은 수정되지 않는다.
[2] Array​.prototype​.splice()
splice() 메소드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다. 이 메소드는 원본 배열 자체를 수정한다.
*/