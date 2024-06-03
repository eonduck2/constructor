const workThree = (...a) => {
  return ({ ...b } = a);
};

console.log(workThree(`테스트`, `ㅎㅇ`));
console.log(typeof workThree);
