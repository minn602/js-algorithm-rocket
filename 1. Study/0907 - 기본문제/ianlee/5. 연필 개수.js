function pencil(num) {
  // Math.ceil() 올림, floor() 내림, round() 반올림
  let answer = Math.ceil(num / 12);
  return answer;
}

console.log(pencil(25));
