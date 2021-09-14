function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(Number(x))) answer += x;
  }
  return Number(answer);
}

solution("g0en2T0s8eSoft");
