function solution(str) {
  let answer = "";
  for (let x of str) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

solution("BANANA");
