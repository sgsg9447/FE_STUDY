function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      //성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      //실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다.");
    }
  }, 2000);
}

// isPositive(10, (res)=>{
//     console.log("성공적으로 수행됨:", res)
// }, (err)=>{
//     console.log("실패 하였음", err)
// });

function isPositiveP(number) {
  const executor = (resolve, reject) => {
    //실행자
    setTimeout(() => {
      if (typeof number === "number") {
        //성공 -> resolve
        resolve(number >= 0 ? "양수" : "음수");
        console.log(number);
      } else {
        //실패 -> reject
        reject("주어진 값이 숫자형 값이 아닙니다.");
      }
    }, 2000);
  };
  const asyncTask = new Promise(executor); //비동기 작업 자체인 프로미스를 저장할 asyncTask를 만들어주고 new키워드로 Promise를 생성해주고,
  //promise 객체의 생성자로 비동기작업의 실질적인 실행자함수executor를 넘겨주면 전달하는 순간 자동으로 실행됨
  return asyncTask;
}

const res = isPositiveP(101);

res.then((res)=>{
    console.log("작업성공:", res)
}).catch((err)=>{
    console.log("작업실패")
})
