const workThree = (...a) => {
  return Object.assign({}, a);
};

console.log(workThree(`테스트`, `ㅎㅇ`));
console.log(typeof workThree);
