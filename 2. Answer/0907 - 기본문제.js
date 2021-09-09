// 📚 1. 세 수 중 최솟값
function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}
console.log(solution(6, 5, 11));

// 📚 2. 최댓값 구하기
function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  answer = max;
  return answer;
}
let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));

// 📚 3. 1부터 N까지 합 출력하기
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }
  return answer;
}
console.log(solution(10));

// 📚 4. 홀수
function solution(arr) {
  let sum = 0,
    min = 1000;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  return sum;
}
arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// 📚 5. 연필 개수
function solution(n) {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
}
console.log(solution(25));

// 📚 6. 10부제
function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 == day) answer++;
  }
  return answer;
}
arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
