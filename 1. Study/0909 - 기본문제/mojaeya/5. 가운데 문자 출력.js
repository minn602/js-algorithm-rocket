/*
[문제]
소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
[입력]
문자열이 입력된다.
[출력]
가운데 문자를 출력한다.
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
    for(let x of input){
      if(x.length % 2 === 0) {
        let idx = x.length / 2 
        console.log(x[idx-1] + x[idx])
      } else {
        let idx = Math.floor(x.length / 2)
        console.log(x[idx])
      }
    }
 
    process.exit()
})