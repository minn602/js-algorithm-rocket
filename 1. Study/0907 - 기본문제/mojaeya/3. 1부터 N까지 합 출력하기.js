/*
3. 1부터 N까지 합 출력하기
[문제]
자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하시오.
[입력]
20이하의 자연수 N이 입력된다.
[출력]
1부터 N까지의 합을 출력한다.
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
    let sum = 0
    for(let i=1; i<=input; i++){
        sum += i
    }
    console.log(sum)

    process.exit()
})

