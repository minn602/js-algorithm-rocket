//?해설참고

// 문자열을 반복문 돌면서 ( 와 알파벳을 넣으면 스택에 쌓는다
// ) 문자열을 만나면 처음 (이 쌓인 스택을 찾아서 그 사이에 있는 문자열은 날린다
// 스택에 남아있는 문자열 출력
function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ")") {
      // ) 닫는 괄호 일때 여는 괄호 까지 문자들을 꺼내야함
      while (stack.pop() !== "("); // stack 에 pop 을 했는데 '(' 가 아닐 때까지 pop 하는것.(문자열 지우기) '(' 만나면 false 되서 while 문 종료
    } else stack.push(x); // 닫는 괄호가 아니라, 여는 괄호나 아무 문자등 은 무조건 stack 에 push
  }
  answer = stack.join(""); // array 인 stack 을 문자나열로 합치기 (join) 해서  answer 로 담기
  return answer;
}

solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)");
