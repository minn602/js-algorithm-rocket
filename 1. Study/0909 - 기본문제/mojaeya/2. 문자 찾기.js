/*
[문제]
한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
[입력]
첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.
[출력]
첫 줄에 해당 문자의 개수를 출력한다.
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
    let str = input[0].split("")
    let alphabet = input[1]
    let count = 0

    for(let x of str){
      if(x===alphabet) count++
    }
    console.log(count)
 
    process.exit()
})