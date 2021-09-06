/*
2. 최댓값 구하기
[문제]
7개의 수가 주어지면 그 숫자 중 가장 큰 수를 출력하는 프로그램을 작성하세요.
[입력]
7개의 수가 주어진다.
[출력]
가장 큰 값을 출력한다.
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
    let seven = input.split(" ").map(Number)
    let max  = seven[0]
    for(let i=1; i<seven.length; i++){
        if(seven[i]>max) max=seven[i]
    }
    console.log(max)


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
//     let seven = input.split(" ").map(Number)
//     console.log(Math.max(...seven)) 

//     process.exit()
// })

// 풀이3
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
//     let seven = input.split(" ").map(Number)
//     seven.sort((a,b) => b-a)
//     console.log(seven[0])

//     process.exit()
// })