/*
[문제]
N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
[입력]
N개의 문자열이 주어진다.
각 문자열의 길이는 서로 다르다.
[출력]
가장 긴 문자열을 출력한다.
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
    let max = input[0]
    for(let i=1; i<input.length; i++){
      if(max.length < input[i].length) max = input[i]
    }
    console.log(max)
 
    process.exit()
})

// 풀이 2
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
    let strLength = []
    for(let x of input){
      strLength.push(x.length)
    }
    let max = Math.max(...strLength)
    let idx = strLength.indexOf(max)

    console.log(input[idx])

    process.exit()
})

