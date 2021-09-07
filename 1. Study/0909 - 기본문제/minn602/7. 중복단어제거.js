function solution(arr) {
  let obj = {},
    answer = [];
  for (let x of arr) {
    obj[x] ? (obj[x] += 1) : (obj[x] = 1);
  }
  Object.keys(obj).map((key) => answer.push(key));
  return answer;
}

solution(["html", "css", "html", "css", "javascript"]);
