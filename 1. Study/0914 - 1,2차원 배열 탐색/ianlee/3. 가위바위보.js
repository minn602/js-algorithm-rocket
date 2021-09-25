function gababo(x, y) {
  // 1가위 2바위 3보
  let answer = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] == 1 && y[i] == 2) answer += "B\n";
    else if (x[i] == 1 && y[i] == 3) answer += "A\n";
    else if (x[i] == 2 && y[i] == 1) answer += "A\n";
    else if (x[i] == 2 && y[i] == 3) answer += "B\n";
    else if (x[i] == 3 && y[i] == 1) answer += "B\n";
    else if (x[i] == 3 && y[i] == 2) answer += "A\n";
    else answer += "D\n";
  }
  return answer;
}

let A = [2, 3, 3, 1, 3];
let B = [1, 1, 2, 2, 3];
console.log(gababo(A, B));
