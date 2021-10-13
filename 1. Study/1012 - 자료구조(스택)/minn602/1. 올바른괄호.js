function solution(str) {
  const arr = str.split("").reverse();
  let temp = 0;
  while (arr.length > 0) {
    let popped = arr.pop();
    if (popped === "(") temp++;
    else temp--;
  }

  if (temp === 0) return "YES";
  else return "NO";
}

solution("(()(()))(()");
