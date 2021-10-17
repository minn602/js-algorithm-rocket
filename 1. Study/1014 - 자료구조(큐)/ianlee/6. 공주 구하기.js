function princess(prince, n) {
  let answer;
  let queue = Array.from({ length: prince }, (v, i) => i + 1);
  // [1, 2, 3, 4, 5, 6, 7, 8]

  while (queue.length) {
    // 0이되면 멈추게
    for (let i = 1; i < n; i++) queue.push(queue.shift()); // shift로 빼서 뒤에 넣어줌
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(princess(8, 3));
