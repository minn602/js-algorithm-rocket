//소수인지 판단하는 함수작성 -> 소수이기 위해선 1과 자기자신 외에 어떠한 수로도 나누어 떨어지면 안됨.
//주어진 반복문을 돌면서 각 요소를 뒤집은 후 소수인지 판단하는 함수에 전달 후
//소수이면 새로운 배열에 푸시하여 리턴해준다.

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let el = x.toString().split("").reverse().join("");
    el = parseInt(el);
    if (isPrime(el)) {
      answer.push(el);
    }
  }
  return answer;
}

solution([32, 55, 62, 20, 250, 370, 200, 30, 100]);
