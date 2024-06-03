const Old = function (a, b) {
  this.first = a;
  this.second = b;
};

const test = new Old(1, 2);
console.log(test);

class NewOld {
  constructor(a, b) {
    this.first = a;
    this.second = b;
  }
}

const newOldTest = new NewOld(1, 2);

console.log(newOldTest);
