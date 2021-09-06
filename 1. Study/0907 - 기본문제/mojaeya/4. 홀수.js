/*
4. 홀수
[문제]
7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하는 프로그램을 작성하세요.
[입력]
자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재한다.
[출력]
홀수들의 합을 출력한다.
*/
// 풀이1
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input

rl.on('line', function(line){
   input = line
   rl.close()
})
  .on('close', function(){
    let seven = input.split(" ").map(Number)
    let odd = []
    let sum = 0
    for(let i=0; i<seven.length; i++){
        if(seven[i] % 2 !== 0) odd.push(seven[i])
    }
    for(let j=0; j<odd.length; j++){
        sum += odd[j]
    }
    console.log(sum)
 
    process.exit()
})