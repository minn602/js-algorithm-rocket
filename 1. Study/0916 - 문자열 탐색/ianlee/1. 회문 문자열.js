function palindrome(word) {
  let answer = "YES";
  word = word.toLowerCase();
  if (word.split("").reverse().join("") != word) answer = "NO";
  return answer;
}

let str = "goooG";
console.log(palindrome(str));
