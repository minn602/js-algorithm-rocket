//정규표현식으로 특수문자, 숫자를 제외한 후 비교

function solution(str) {
  let reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"][^0-9]/gi;
  let str1 = str.replace(reg, "");
  let reversed = str1.toLowerCase().split("").reverse().join("");
  if (str1.toLowerCase() === reversed) return "YES";
  else return "NO";
}

solution("found7, time: study; Yduts; emit, 7Dnuof");
