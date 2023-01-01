//객체 생성
const obj1 = new Object();
const obj2 = {};
const obj3 = { name: "sseul", company: "gg" };
console.log(obj1);
console.log(obj2);
console.log(obj3);

//객체 값 추가
obj1["email"] = "sseul@gmail.com";
obj1.phone = "0101112222";
console.log(obj1);
//객체 값 삭제
delete obj1.phone;
console.log(obj1);

console.log("email" in obj1);
console.log("phone" in obj1);

console.log(Object.keys(obj1));

// for in
for (const key in obj1) {
  console.log(key, obj1[key]);
}
