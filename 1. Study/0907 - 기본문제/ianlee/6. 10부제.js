function tenRule(day, carNum) {
  let answer = 0;
  for (let x of carNum) {
    if (x % 10 == day) answer++;
  }
  return answer;
}

let arr = [25, 23, 11, 47, 53, 17, 33];
console.log(tenRule(3, arr));
