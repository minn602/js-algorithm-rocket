function solution(n) {
  return Math.floor(n / 12) + 1;
}

solution(25);

//24명인 경우를 생각해서 조건문추가하기
//ceil 메소드 사용하면 +1 연산을 할 필요가 없다.

function solution(n) {
  if (n % 12 === 0) {
    return Math.floor(n / 12);
  } else {
    return Math.ceil(n / 12);
  }
}
