function solution(str, part) {
  let obj = {},
    answer = 0;
  for (let x of part) {
    obj[x] ? (obj[x] += 1) : (obj[x] = 1);
  }

  for (let i = 0; i <= str.length - part.length; i++) {
    let obj1 = {},
      flag = 0;
    for (let j = i; j < i + part.length; j++) {
      obj1[str[j]] ? (obj1[str[j]] += 1) : (obj1[str[j]] = 1);
    }
    for (let x in obj1) {
      if (obj[x] === obj1[x]) {
        flag++;
      }
    }
    if (flag === part.length) answer++;
  }
  return answer;
}

solution("bacaAacba", "abc");
