function delWord(word) {
  let answer = "";
  answer = word.filter((v, i) => {
    if (str.indexOf(v) === i) return v;
  });
  return answer;
}
let str = ["html", "css", "html", "css", "javascript"];
console.log(delWord(str));
