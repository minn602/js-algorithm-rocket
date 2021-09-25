/*
[문제]
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하시오.
[입력]
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어진다. 문자열의 길이는 100을 넘지 않는다.
[출력]
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
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
    let str = input.split(" ")[0]
    let letter = input.split(" ")[1]
    let count = 0 
    let result = []
    
    for(let i=0; i<str.length; i++) {
        if(str[i] === letter) {
            count = 0
            result.push(count)
        } else {
            count++
            result.push(count)
        }
    }

    for(let i=str.length-1; i>=0; i--){
        if(str[i] === letter) {
            count = 0
        } else {
            count++
            result[i] = Math.min(result[i], count)
        }
    }
    console.log(result.join(""))

    process.exit()
})