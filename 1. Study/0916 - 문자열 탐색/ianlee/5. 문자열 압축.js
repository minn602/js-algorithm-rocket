function compression(word) {
  let answer = "";
  let count = 1;
  // 마지막 문자 하나 더 추가 위해서
  word = word + " ";
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] == word[i + 1]) {
      count++;
    } else {
      answer += word[i];
      if (count > 1) answer += String(count);
      count = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(compression(str));
