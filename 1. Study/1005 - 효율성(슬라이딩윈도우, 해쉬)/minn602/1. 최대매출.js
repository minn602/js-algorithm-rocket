function solution(n, arr) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= arr.length - n; i++) {
    let sum = 0;
    for (let j = i; j < i + n; j++) {
      sum += arr[j];
    }
    if (sum > max) max = sum;
  }
  return max;
}

solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]);

//수정
