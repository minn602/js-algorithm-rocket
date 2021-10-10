function solution(str) {
  let obj = {};
  for (let x of str) {
    obj[x] ? (obj[x] += 1) : (obj[x] = 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  let answer;
  for (let x in obj) {
    if (obj[x] > max) {
      max = obj[x];
      answer = x;
    }
  }
  return answer;
}

solution("BACBACCACCBDEDE");
