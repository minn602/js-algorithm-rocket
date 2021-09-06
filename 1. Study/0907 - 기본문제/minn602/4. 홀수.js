function solution(arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 2 === 1) {
      answer += x;
    }
  }
  return answer;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
