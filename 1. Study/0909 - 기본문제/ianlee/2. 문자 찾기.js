function search(word, char) {
  let answer = 0;
  for (x of word) {
    if (x == char) answer++;
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(search(str, "R"));
