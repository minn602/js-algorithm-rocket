//? 해설 참고.
//주어진 문자열을 반복문 돌면서(순방향) 거리를 구해서 answer에 넣어준다
//다시 역방향으로 반복문을 돌면서 answer에 들어간 거리와 역방향을때 구한 거리중 최소값으로 바꿔준다.

function solution(str, letter) {
  let answer = [],
    distance = 100;

  for (let x of str) {
    if (x === letter) {
      distance = 0;
      answer.push(distance);
    } else {
      distance++;
      answer.push(distance);
    }
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === letter) {
      distance = 0;
    } else {
      distance++;
      answer[i] = Math.min(distance, answer[i]);
    }
  }

  return answer.join("");
}

solution("teachermode", "e");
