function solution(arr1, arr2) {
  let arr = arr1.concat(arr2);
  arr = arr.sort((a, b) => a - b);
  return arr;
}

solution([1, 3, 5], [2, 3, 6, 7, 9]);
