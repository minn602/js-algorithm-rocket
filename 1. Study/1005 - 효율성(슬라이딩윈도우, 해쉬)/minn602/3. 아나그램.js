function solution(str1, str2) {
  let obj1 = {},
    obj2 = {};
  for (let x of str1) {
    obj1[x] ? (obj1[x] += 1) : (obj1[x] = 1);
  }
  for (let x of str2) {
    obj2[x] ? (obj2[x] += 1) : (obj2[x] = 1);
  }

  for (let x in obj1) {
    if (obj1[x] !== obj2[x]) return "NO";
  }
  return "YES";
}

solution("AbaAeCe", "baeeACA");
solution("abaCC", "Caaab");
