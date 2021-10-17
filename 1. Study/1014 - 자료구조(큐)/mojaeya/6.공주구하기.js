function solution(N, K) {
  let queue = []
  for(let i=1; i<=N; i++) queue.push(i); 
  
  for(let i=0; i<N; i++) { // i<queue.length => X
    for(let j=1; j<K; j++) queue.push(queue.shift());
    queue.shift()
    if(queue.length === 1) break;
  }
  return +queue
}

console.log(solution(8,3))