function number() {
  let answer = "";
  for (let x of str) {
    if (isNaN(x) != true) answer += x;
  }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(number(str));
