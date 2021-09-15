/*
[문제]
문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만든다. 만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205이 된다. 추출하여 만들어지는 자연수는 100,000,000을 넘지 않는다.
[입력]
첫 줄에 숫자가 썩인 문자열이 주어진다. 문자열의 길이는 50을 넘지 않는다.
[출력]
첫 줄에 자연수를 출력합니다.
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
    let onlyNum = input.replace(/[^0-9]/g, '') // 숫자 아닌것은 공백
    
    console.log(Number(onlyNum))

    process.exit()
})