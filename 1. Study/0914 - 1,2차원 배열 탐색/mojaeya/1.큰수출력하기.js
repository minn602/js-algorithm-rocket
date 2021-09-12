/*
[문제]
N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)
[입력]
첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.
[출력]
자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.
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
    let result = []
    let num = input[1].split(" ").map(Number)
    
    result.push(num[0])
    for(let i=1; i<input[0]; i++){
        if(num[i] > num[i-1]) result.push(num[i])
    }

    console.log(result.join(" "))
 
    process.exit()
})