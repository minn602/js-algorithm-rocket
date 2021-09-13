/*
[문제]
N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.
[입력]
첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.
[출력]
최대합을 출력합니다.
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
    let N = input[0]
    let rowSum = 0, columnSum = 0 
    let rowSumArr = [], columnSumArr = []
    let diag1Sum = 0, diag2Sum = 0
    
    for(let i=1; i<=N; i++){
        diag1Sum += input[i].split(" ").map(Number)[i-1]
        diag2Sum += input[i].split(" ").map(Number)[N-i]
        for(let j=0; j<N; j++){
            rowSum += input[i].split(" ").map(Number)[j]
            columnSum += input[j+1].split(" ").map(Number)[i-1]
        }
        rowSumArr.push(rowSum)
        columnSumArr.push(columnSum)
        rowSum = 0
        columnSum = 0
    }
    let diagSumMax = (diag1Sum > diag2Sum) ? diag1Sum : diag2Sum
    // console.log("diagSumMax:", diagSumMax)
    let rowSumMax = Math.max(...rowSumArr)
    // console.log("rowSumMax:", rowSumMax)
    let columnSumMax = Math.max(...columnSumArr)
    // console.log("columnSumMax:", columnSumMax)

    const result = Math.max(diagSumMax, rowSumMax, columnSumMax)
    console.log(result)
 
    process.exit()
})