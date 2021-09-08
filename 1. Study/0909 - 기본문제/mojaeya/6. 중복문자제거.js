/*
[문제]
소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요. 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
[입력]
문자열이 입력된다.
[출력]
중복문자가 제거된 문자열을 출력한다.
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
    let arr = []
    for(let i=0; i<input.length; i++){
      if(arr.indexOf(input[i]) === -1) arr.push(input[i])
    }
    console.log(arr.join(""))
 
    process.exit()
})