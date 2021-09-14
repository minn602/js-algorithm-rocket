//각 행의 합, 열의 합, 대각선의 합을 구해서

function solution(n, arr) {
  let row = [],
    col = [],
    diagonal = [],
    answer = [];

  //각 행의 합을 구한다.
  for (let i = 0; i < arr.length; i++) {
    row.push(arr[i].reduce((a, b) => a + b, 0));
  }

  //각 열의 합을 구한다.
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    col.push(sum);
  }

  //대각선의 합을 구한다.
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) sum1 += arr[i][j];
    }
    diagonal.push(sum1);
  }

  let sum2 = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
      if (i === j) sum2 += arr[i][j];
    }
    diagonal.push(sum2);
  }

  answer.push(Math.max(...row), Math.max(...col), Math.max(...diagonal));
  return Math.max(...answer);
}

solution(5, [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]);
