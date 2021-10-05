// 투포인터
// 리스트에 순차적으로 접근해야 할 때 두 개의 점의 위치를 기록하면서 처리하는 알고리즘
// 시간복잡도 O(N) : 각각 배열 끝에 다다르는데 O(N) 이라 둘을 합해도 여전히 O(N)

// cf) 슬라이딩 윈도우
// 투포인터처럼 구간을 훑으면서 지나간다는 공통점이 있으나 슬라이딩 윈도우는 어느 순간에도 구간의 넓이가 동일하다는 차이점이 있습니다.

function twoPointers(num, arr) {
  let answer = 0,
    prev = 0,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === num) answer++;
    while (sum >= num) {
      sum -= arr[prev++];
      if (sum === num) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(twoPointers(6, a));
