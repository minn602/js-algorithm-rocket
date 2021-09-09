function count(num) {
  let answer = 0;
  for (let i = 0; i < num; i++) {
    answer += i;
  }
  return answer;
}
console.log(count(10));
