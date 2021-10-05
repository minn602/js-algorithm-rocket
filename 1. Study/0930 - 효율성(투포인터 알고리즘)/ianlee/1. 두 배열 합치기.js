function conArr(arr1, arr2) {
  // concat() 함수
  let answer = arr1.concat(arr2).sort((a, b) => a-b);
  // ... spread operator (전개연산자)
  let answer = [...arr1, ...arr2].sort((a, b) => a-b);
  return answer;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];

console.log(conArr(arr1, arr2));