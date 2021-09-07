function solution(str) {
  let obj = {},
    answer = "";
  for (let x of str) {
    obj[x] ? (obj[x] += 1) : (obj[x] = 1);
  }
  //obj = {a: 1, b: 3, c: 1, d: 2, e: 3}
  Object.keys(obj).map((key) => (answer += key));
  return answer;
}

solution("abbbcddeee");
