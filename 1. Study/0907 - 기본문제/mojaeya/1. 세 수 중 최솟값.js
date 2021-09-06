/*
1. 세 수 중 최솟값
[문제]
100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요. (정렬을 사용하면 안됩니다)
[입력]
100이하의 세 자연수가 입력된다.
[출력]
가장 작은 수를 출력한다.
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
    let A = input.split(" ").map(Number)[0]
    let B = input.split(" ").map(Number)[1]
    let C = input.split(" ").map(Number)[2]

    let min 
    if(A<B) {
        min = A
    } else min = B
    if(C<min) {
        min = C
    } else min

    console.log(number)

    
    process.exit()
})
// 풀이2
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// let input

// rl.on('line', function(line){
//    input = line
//    rl.close()
// })
//   .on('close', function(){
//     let A = input.split(" ").map(Number)[0]
//     let B = input.split(" ").map(Number)[1]
//     let C = input.split(" ").map(Number)[2]

//     let min = Math.min(A,B,C)
//     console.log(min)

//     process.exit()
// })