class MakeCoffee {
  constructor(wondoo, water, sugar, milk) {
    this.wondoo = wondoo;
    this.water = water;
    this.sugar = sugar;
    this.milk = milk;
  }

  set wondoo(value) {
    if (typeof value === `string`) {
      this._wondoo = value;
    } else {
      throw new Error(`문자열 타입이여야`);
    }
  }

  get wondoo() {
    return `${this._wondoo}산 좋은 원두`;
  }

  set water(value) {
    if (!isNaN(value)) {
      this._water = value;
    } else {
      throw new Error(`넘버 타입이여야`);
    }
  }

  get water() {
    return `${this._water}ml`;
  }

  set sugar(value) {
    if (value) {
      this._sugar = `단 맛`;
    } else {
      this._sugar = `쓴 맛`;
    }
  }

  get sugar() {
    return this._sugar;
  }
}

const test = new MakeCoffee(`탄자니아`, 300, true, true);
console.log(test.wondoo);
console.log(test.water);
console.log(test);
