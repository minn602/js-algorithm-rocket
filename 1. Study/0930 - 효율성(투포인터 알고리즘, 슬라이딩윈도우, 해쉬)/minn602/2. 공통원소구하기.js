function solution(arr1, arr2) {
  let arr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) arr.push(arr1[i]);
    }
  }

  return arr.sort((a, b) => a - b);
}

solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]);
