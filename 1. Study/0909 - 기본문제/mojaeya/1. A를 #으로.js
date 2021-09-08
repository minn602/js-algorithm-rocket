/*
[문제]
대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램을 작성하세요.
[입력]
문자열이 입력된다.
[출력]
바뀐 단어를 출력한다.
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
    let word = input.split("")
    for(let i=0; i<word.length; i++){
      if(word[i]==="A") word[i] = "#"
    }
    console.log(word.join(""))
    process.exit()
})