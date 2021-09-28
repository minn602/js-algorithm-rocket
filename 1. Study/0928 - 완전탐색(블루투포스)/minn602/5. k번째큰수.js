//수로 이루어진 주어진 배열에서 3개의 요소들을 뽑아서 요소들의 합 중 주어진 n번째로 큰수를 구하는 함수(중복은 제거)
//1. 주어진 배열에서 3개를 뽑을 수 있는 모든 경우의 수 구하기
//2. 1에서 구한 경우의 수의 합 구하기
//3. 2에서 구한 거에서 중복은 제거하고 정렬하기
//4. 주어진 수의 위치에 위치한 요소 구해서 리턴하기

function solution(n, arr) {
  let cases = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (i !== j && j !== k && i !== k) {
          cases.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  let total = cases.map((el) => el[0] + el[1] + el[2]);
  total = [...new Set([...total])];
  total = total.sort((a, b) => b - a);

  return total[n - 1];
}

solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]);
