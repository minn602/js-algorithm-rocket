function solution(str) {
  let obj = {},
    answer = "";
  for (let x of str) {
    obj[x] ? (obj[x] += 1) : (obj[x] = 1);
  }
  Object.entries(obj).map((el) => {
    answer += el[0];
    if (el[1] !== 1) answer += el[1];
  });
  return answer;
}

solution("KKHSSSSSSSE");
