// 슬라이딩 윈도우
// 창문을 옆으로 밀고 가는 것처럼 배열이나 리스트의 요소의 일정 범위의 값을 비교할때 사용하면 유용한 알고리즘이다.

function slidingWindow(k, arr) {
  let answer,
    sum = 0;

  for (let i = 0; i < k; i++) sum += arr[i]; // sum = 12 + 15 + 11
  answer = sum; // answer = 38

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k]; // 38 + 20 - 12 = 46... 46 + 25 - 15 = 56......
    answer = Math.max(answer, sum); // 기존 answer와 sum 중 최대 값
  }

  return answer;
}

let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(slidingWindow(3, arr));
