function solution(board, moves) {
  let basket = [],
    boardCopy = board,
    answer = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (boardCopy[j][moves[i] - 1] === 0) continue;
      else {
        basket.push(boardCopy[j][moves[i] - 1]);
        boardCopy[j][moves[i] - 1] = 0;
        break;
      }
    }

    while (basket.length > 1) {
      if (basket[basket.length - 1] === basket[basket.length - 2]) {
        basket.pop();
        basket.pop();
        answer += 2;
      }
      break;
    }
  }

  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
