//정렬된 배열과 원본배열을 비교하여 인덱스를 이용하여 등수를 구해준다

function solution(n, arr) {
  let answer = new Array(n);
  //sort메소드는 원본을 수정하는 메소드여서 카피본을 만든 후 해당 카피본을
  //사용하여 sort메소드를 사용해준다.
  const copyArr = [...arr];
  //내림차순으로 정렬
  let sortedArr = copyArr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < sortedArr.length; j++) {
      if (arr[i] === sortedArr[j]) {
        answer[i] = j + 1;
      }
    }
  }

  return answer;
}

solution(5, [87, 89, 92, 100, 76]);
