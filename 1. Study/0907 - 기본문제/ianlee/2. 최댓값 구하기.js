function maxValue(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(maxValue(arr));
