function palindrome(word) {
  let answer = "YES";
  word = word.toLowerCase().replace(/[^a-z]/g, "");
  if (word.split("").reverse().join("") != word) answer = "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(palindrome(str));
