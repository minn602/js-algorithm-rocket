function middle(word) {
  let answer = "";
  // 나눠서 반내림
  let mid = Math.floor(word.length / 2);
  // 홀수일 때
  if (word.length % 2 == 1) answer = word.substring(mid, mid + 1);
  // 짝수일 때
  else answer = word.substring(mid - 1, mid + 1);
  return answer;
}
console.log(middle("good"));
