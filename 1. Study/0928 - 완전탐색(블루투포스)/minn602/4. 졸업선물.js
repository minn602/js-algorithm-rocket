//? 해설참조
//1. 가능한 최대로 구매할 수 있는 선물의 수를 구하기 때문에 -> 비용이 적게 드는 것부터 구매하는 것으로 한다 (합이 작은 순으로 정렬 필요)
//2. 어떠한 경우에 쿠폰을 적용했을때 적합한지 알 수 없으므로 하나하나씩 따져봐야한다.

function sortedArr(arr) {
  const total = arr
    .map((el) => el.reduce((a, b) => a + b, 0))
    .sort((a, b) => a - b);

  let sortedArr = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < total.length; j++) {
      if (arr[i][0] + arr[i][1] === total[j]) {
        sortedArr[j] = arr[i];
      }
    }
  }

  return sortedArr;
}

function solution(budget, arr) {
  let sorted = sortedArr(arr);
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let copyBudget = budget;
    let discountedItem = sorted[i][0] / 2 + sorted[i][1];
    copyBudget -= discountedItem;
    let cnt = 0;
    for (let j = 0; j < sorted.length; j++) {
      if (i !== j && copyBudget >= 0) {
        copyBudget -= sorted[j][0] + sorted[j][1];
        cnt++;
      }
    }
    answer.push(cnt);
  }
  return Math.max(...answer);
}

solution(28, [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
]);
