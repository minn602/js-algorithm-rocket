/*
[문제]
지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
격자의 가장자리는 0으로 초기화 되었다고 가정한다. 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.
[입력]
첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.
[출력]
봉우리의 개수를 출력하세요.
*/
// 풀이1
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function(line){
   input.push(line.split(" ").map((el) => +el)) // 한줄 입력 결과가 2차원 배열로 input에 들어가도록 구현
})
  .on('close', function(){
    let N = input[0].join("")
    input.shift()

    let dx = [-1, 0, 1, 0] // 네방향 초기화(행)
    let dy = [0, 1, 0, -1] // 네방향 초기화(열)
    let peak = 0
    
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            peak++
            for(let k=0; k<4; k++){
                let nx = i + dx[k]
                let ny = j + dy[k]
                if(nx >= 0 && nx < N && ny >= 0 && ny < N && input[nx][ny] >= input[i][j]) {
                    peak--
                    break
                }
            }   
        }
    }
    console.log(peak)
 
    process.exit()
})