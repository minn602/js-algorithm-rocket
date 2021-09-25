/*
[문제]
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 한다. 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하시오. 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시한다.
[입력]
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어진다.
[출력]
첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력한다.
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
    let origin = input.toLowerCase().replace(/[^a-z]/g, '')  // 문자열 아닌것은 공백
    let reverse = origin.split("").reverse().join("")
    console.log(origin)
    if(origin === reverse){
        console.log("YES")
    } else {
        console.log("NO")
    }
 
    process.exit()
})