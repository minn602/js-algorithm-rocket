function solution(str, letter) {
  let count = 0;
  for (let x of str) {
    if (x === letter) count++;
  }
  return count;
}

solution("COMPUTERPROGRAMMING", "R");
