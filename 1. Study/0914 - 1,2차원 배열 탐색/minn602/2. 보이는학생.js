function solution(n, arr) {
  let max = arr[0],
    answer = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
      answer++;
    }
  }

  return answer;
}

solution(8, [130, 135, 148, 140, 145, 150, 150, 153]);
