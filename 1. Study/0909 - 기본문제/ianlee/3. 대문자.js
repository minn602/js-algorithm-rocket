function capital(word) {
  let answer1 = 0;
  let answer2 = "";
  let answer3 = "";
  for (x of word) {
    let num = x.charCodeAt();
    // ASCII코드 대문자 65~90 소문자 97~122
    if (num >= 65 && num <= 90) answer1++;
    answer2 += x.toUpperCase();
    if (num >= 65 && num <= 90) answer3 += x.toLowerCase();
    else answer3 += x.toUpperCase();
  }
}

let str = "JavaScriptAlgorithmRocketStudy";
console.log(capital(str));
