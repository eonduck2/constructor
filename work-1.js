/**
 * NOTE: 1. 이 파일은 생성자 함수 연습 파일입니다.
 *
 * NOTE: 2. 목적은 생성자 함수를 이해하기 위함입니다.
 * @eonduck2
 * @param {string}a 객체의 키 역할
 * @param {string}b 객체의 벨류 역할
 * @returns {object} 두 매개변수로 라벨링이 된 객체
 */
// FIXME
// const workOne = (a, b) => {
//   const localObj = {};

//   localObj[a] = b;

//   return localObj;
// };
// FIXME

const workTwo = (...a) => {
  const localObj = {};
  const { ...rest } = a;

  for (let key in rest) {
    console.log(rest[key]);
    if (Number(key) % 2 == 0) {
      localObj[rest[key]] = a[1];
    }
  }
  console.log(localObj);

  return localObj;
};

workTwo(`테스트 키`, `테스트 벨류`, `가나다라`, `마바사아`);

// console.log(workOne(`테스트 키`, `테스트 벨류`));

// const pracConstructor = (testArg) => {
//   this.test1 = testArg;
// };

// const test = new pracConstructor(`테스트`);

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("지우");

// alert(user.name);
// alert(user.isAdmin);
