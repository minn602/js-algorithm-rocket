//반복문으로 주어진 배열을 순회하며 각 요소마다의 자릿수 합을 구한 후 새로운 배열에 넣는다
//그 배열의 최댓 값을 구한 후 최댓 값이 위치한 원래배열의 인덱스로 요소를 구한후
//최댓 값이 여러개인 경우는 원래 요소의 크기를 구하여 큰 것을 리턴한다.

function solution(arr) {
  let sumArr = [],
    answer;
  for (let x of arr) {
    let el = x
      .toString()
      .split("")
      .map((el) => parseInt(el))
      .reduce((a, b) => a + b, 0);
    sumArr.push(el);
  }

  let max = Math.max(...sumArr);

  for (let i = 0; i < sumArr.length; i++) {
    if (sumArr[i] === max) {
      if (answer && answer < arr[i]) {
        return (answer = arr[i]);
      }
      answer = arr[i];
    }
  }

  return answer;
}

solution([128, 460, 603, 40, 521, 137, 123]);
