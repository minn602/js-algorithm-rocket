function solution(str) {
  if (str.length % 2 === 1) return str[Math.floor(str.length / 2)];
  else
    return str.slice(
      Math.floor(str.length / 2) - 1,
      Math.floor(str.length / 2) + 1
    );
}

solution("study");
solution("good");
