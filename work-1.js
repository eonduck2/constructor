// * 이 파일은 기본 함수 연습 파일입니다.
// * 목적은 함수를 조금 더 이해하려고 합니다.
// * 매개변수가 객체인 경우가 아래에 작성될 예정입니다.

function workOne(a, b) {
  //* logic : 매개변수 두개를 받은 다음
  //* logic : return은 객체였음 좋겠다.
  if (typeof a === "string") {
    if (typeof b === "string") {
      let localVariable = {};

      localVariable[a] = a;
      localVariable[b] = b;

      return localVariable;
    } else {
      console.error("좋은말할때 문자열로 바꿔라");
    }
  } else {
    console.error("좋은말할때 문자열로 바꿔라");
  }
  // * condition : 매개변수 모두 문자열이여야 한다.
}

let test = workOne(1, 2);
console.log(test);
