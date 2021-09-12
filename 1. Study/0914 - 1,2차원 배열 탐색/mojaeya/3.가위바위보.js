/*
[문제]
두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요.
[입력]
첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다. 두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다. 세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.
[출력]
각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.
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
    let A = input[1].split(" ").map(Number)
    let B = input[2].split(" ").map(Number)

    for(let i=0; i<N; i++) {
        switch(A[i]) {
            case 1:  // A: 가위
                    switch(B[i]) {
                        case 1: console.log("D") 
                        break
                        case 2: console.log("B")
                        break
                        case 3: console.log("A")
                        break
                    }
                    break
            case 2:  // A: 바위 
                    switch(B[i]) {
                        case 1: console.log("A") 
                        break
                        case 2: console.log("D")
                        break
                        case 3: console.log("B")
                        break
                    }
                    break
            case 3:   // A: 보
                    switch(B[i]) {
                        case 1: console.log("B") 
                        break
                        case 2: console.log("A")
                        break
                        case 3: console.log("D")
                        break
                    }
                    break
        }
    }
 
    process.exit()
})