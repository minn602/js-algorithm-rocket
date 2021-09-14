function solution(n, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x.toString()[1] === n.toString()) answer++;
  }
  return answer;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));

//10으로 나눈 나머지 값(1의 자리)이 날짜와 같은지 비교 가능하다
