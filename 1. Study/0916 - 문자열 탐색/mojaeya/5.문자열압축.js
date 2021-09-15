/*
[문제]
알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오. 단 반복횟수가 1인 경우 생략한다.
[입력]
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
[출력]
첫 줄에 압축된 문자열을 출력한다.
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
    let result = []
    let count = 1
    for(let i=0; i<input.length; i++){
        if(result.indexOf(input[i]) === -1) {
            result.push(input[i])
            count = 1
        } else {
            count++
            if(input[i] !== input[i+1]) {
                result.push(count)
            }
        }
    } 
    console.log(result.join(""))
 
    process.exit()
})