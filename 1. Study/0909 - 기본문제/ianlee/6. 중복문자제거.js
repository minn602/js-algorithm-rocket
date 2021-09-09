function delStr(word) {
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    // 인덱스번호와 본래 위치가 일치할 때 첫번째로 발견된 것
    if (word.indexOf(word[i]) === i) answer += word[i];
  }
  return answer;
}

let str = "abbbcddeee";
console.log(delStr(str));
