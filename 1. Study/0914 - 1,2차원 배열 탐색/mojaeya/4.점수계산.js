/*
[문제]
시험문제의 채점 결과가 주어졌을 때, 총 점수를 계산하는 프로그램을 작성하시오.
[입력]
첫째 줄에 문제의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에는 N개 문제의 채점 결과를 나타내는 0 혹은 1이 빈 칸을 사이에 두고 주어진다. 0은 문제의 답이 틀린 경우이고, 1은 문제의 답이 맞는 경우이다.
[출력]
첫째 줄에 입력에서 주어진 채점 결과에 대하여 가산점을 고려한 총 점수를 출력한다.
*/
// 풀이1
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function(line){
   input.push(line)
})
  .on('close', function(){
    let N = Number(input[0])
    let score = 0
    let plus = 0 
    const result = input[1].split(' ')
       
    for(let i=0; i<N; i++){
        if(result[i] === '1') {
        score += 1 + plus
        plus++
        } else if(result[i] === '0'){
         plus = 0  // 초기화
        }
    }
    console.log(score)
    
    process.exit()
})