// function test(test1) {
//   this.test = test1;
// }

// const test = function (test1) {
//   this.test = test1;
// };

// const test = (test1) => {
//   this.test = test1;
// };

// console.log(test.this);

// 분류구격 라면볶음면{
//     재료들(라면종류, 라면물, 추가재료){
// 라면종류: 라면종류
// 라면물: 라면물
// 추가재료: 추가재료
//     }
// }

class Ramen {
  constructor(ramen, water, etc) {
    this.ramen = ramen;
    this.water = water;
    this.etc = etc;
  }

  set ramen(ramen) {
    if (ramen !== `진라면`) {
      throw new Error(`진라면 아님`);
    }
  }

  get ramen() {
    return this.ramen;
  }
}

const classTest = new Ramen(`진라면`, `300ml`, `대파`);

console.log(classTest);
