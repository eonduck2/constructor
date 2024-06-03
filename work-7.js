// * 객체 리터럴에 메서드가 추가된 방식
const first = {
  a: 1,
  b: 2,
  add: function () {
    return this.a + this.b;
  },
};
let testFirst = first.add();
console.log(testFirst);

// * 객체를 리턴하는 일반 함수
function second(a, b) {
  let result = {};
  result.first = a;
  result.second = b;
  return result;
}
// * 단순 값을 더하는 함수
function add(a, b) {
  return a + b;
}
let testSecond = second(1, 2);
let testSecondAdd = add(testSecond.first, testSecond.second);
console.log(testSecondAdd);

// * 생성자 함수 방식
class Third {
  constructor(a, b) {
    this.first = a;
    this.second = b;
  }
  add() {
    return this.first + this.second;
  }
}

let testThird = new Third(1, 2);
let testThirdAdd = testThird.add();
console.log(testThirdAdd);
console.dir(testThird);
