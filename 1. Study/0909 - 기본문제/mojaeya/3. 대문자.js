/*
[문제]
(1) 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.
(2) 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성하세요.
(3) 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.
[입력]
문자열이 입력된다.
[출력]
(1) 대문자의 개수를 출력한다.
(2) 대문자로 통일된 문자열이 출력된다.
(3) 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.
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
    let str = input.split("") 
    let big = input.toUpperCase().split("")
    let small = input.toLowerCase().split("")
    let count = 0

    for(let i=0; i<input.length; i++){
      if(str[i] === big[i]) {
        count++
        str[i] = small[i]
      } else {
        str[i] = big[i]
      }
    }

    console.log(count)
    console.log(input.toUpperCase())
    console.log(str.join(""))
 
    process.exit()
})