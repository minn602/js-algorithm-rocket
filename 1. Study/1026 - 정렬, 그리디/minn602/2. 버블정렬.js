function solution(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    //매번 새로운 inner loop시작 전에 noSwaps는 true로 할당된다.
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      //swap condition
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        //swap이 일어났기 때문에 noSwaps는 false가 된다.
        noSwaps = false;
      }
    }
    //inner loop를 돌때 스왑 될 것이 없어서 noSwaps가 계속 true면 이미 주어진 배열은 정렬된것으로 보고
    //outer loop를 종료한다.
    if (noSwaps) break;
  }
  return arr;
}

solution([13, 5, 11, 7, 23, 15]);
