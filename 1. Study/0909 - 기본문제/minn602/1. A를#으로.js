function solution(str) {
  let answer = "";
  for (let x of str) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

solution("BANANA");

//replace 메소드를 활용하여 처리 가능하다.
function solution(str) {
  let answer = str;
  answer = answer.replace(/A/g, "#");
  return answer;
}
