// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// //async

// async function helloAsync() {
//   return delay(3000).then(() => {
//     return "hello Async";
//   });
// }
// // async : 함수가 Promise를 반환하도록 만드는 능력이있음!!

// console.log(helloAsync());

// helloAsync().then((res) => {
//   console.log(res);
// });

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync() {
  await delay(3000);
  return "hello Async";
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();
