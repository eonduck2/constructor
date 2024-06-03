// const target = {
//   message1: "hello",
//   message2: "everyone",
// };

// const handler2 = {
//   set(target, key, value) {
//     target[key] = `테스트`;
//   },
//   //   get(target, prop, receiver) {
//   //     return "world";
//   //   },
// };
// const proxy2 = new Proxy(target, handler2);
// console.log(proxy2.message1);

const proxy = new Proxy(
  { test: `테스트입니다.` },
  {
    get(target, prop, receiver) {
      return `테스트: ${target[prop]}`;
    },
  }
);

proxy.final = 5;
console.log(proxy.final);
