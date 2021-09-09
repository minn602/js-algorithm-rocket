function odd(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) answer += arr[i];
  }
  return answer;
}
let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(odd(arr));
