function replace(word) {
  let answer = "";
  for (let x of word) {
    if (x == "A") answer += "#";
    else answer += x;
  }
  return answer;
}

let str = "BANANA";
console.log(replace(str));
