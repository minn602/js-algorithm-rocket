function solution(str) {
  let reversed = str.toLowerCase().split("").reverse().join("");
  if (str.toLowerCase() === reversed) return "YES";
  else return "NO";
}

solution("gooG");
