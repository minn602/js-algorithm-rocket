/*
[문제]
N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요. 출력하는 문자열은 원래의 입력순서를 유지합니다.
[입력]
N개의 문자열이 주어진다.
[출력]
중복이 제거된 문자열을 차례로 출력한다.
*/
// 풀이1
const { listeners } = require('process')
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
    let arr = []
    for(let x of input){
      if(arr.indexOf(x) === -1) arr.push(x)
    }
    console.log(arr.join("\n"))
 
    process.exit()
})