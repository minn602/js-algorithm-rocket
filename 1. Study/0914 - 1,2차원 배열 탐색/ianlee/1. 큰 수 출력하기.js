function solution(n, arr) {
  let answer = [];
  for (let x of arr) {
    if (x >= n) answer.push(x);
  }
  return answer;
}

solution(6, [7, 3, 9, 5, 6, 12]);
