function HyeonRamen(ramenName, ramenWater, addFood) {
  if (ramenName !== "진라면") {
    console.error("진라면이 아니여서 안할껴");
  } else {
    let local = {
      ramenName: ramenName,
      ramenWater: ramenWater,
      addFood: addFood,
    };
    return local;
  }
}

let test = HyeonRamen("진라면", "300ml", "고추장");
console.log(test);
