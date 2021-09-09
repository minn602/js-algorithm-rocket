function long(words) {
  let answer = "";
  let max = 0;
  for (let x of words) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(long(str));
