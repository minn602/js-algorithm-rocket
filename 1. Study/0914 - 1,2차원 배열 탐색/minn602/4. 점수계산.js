//반복문 돌면서 요소 값이 1 이면 스코어 변수 값을 +1 씩 해주고 sum에 더해준다.
//요소 값이 0 이면 스코어는 0으로 리셋된다.

function solution(n, arr) {
  let score = 0,
    answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      score += 1;
      answer += score;
    } else {
      score = 0;
    }
  }
  return answer;
}

solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]);
