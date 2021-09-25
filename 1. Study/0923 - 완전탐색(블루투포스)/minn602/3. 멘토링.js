//? 해설참조
//멘토-멘티가 될수 있는 모든 경우의 수를 조건대로 탐색하며 가능한 경우에 answer를 추가한다.

function solution(numOfStudents, numOfTests, arr) {
  let answer = 0;
  //멘토-멘티가 될 수 있는 경우의 수를 인덱스로 생성
  for (let i = 1; i <= numOfStudents; i++) {
    for (let j = 1; j <= numOfStudents; j++) {
      let verifyCnt = 0;
      //각 학생의 등수를 파악하기 위한 반복문
      for (let k = 0; k < numOfTests; k++) {
        //i, j 번째 인덱스 학생의 등수를 넣는 변수
        let iScore,
          jScore = 0;
        for (let m = 0; m < numOfStudents; m++) {
          if (arr[k][m] === i) {
            iScore = m;
          }
          if (arr[k][m] === j) {
            jScore = m;
          }
        }
        if (iScore < jScore) verifyCnt++;
      }
      if (verifyCnt === numOfTests) answer++;
    }
  }
  return answer;
}

solution(4, 3, [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
]);
