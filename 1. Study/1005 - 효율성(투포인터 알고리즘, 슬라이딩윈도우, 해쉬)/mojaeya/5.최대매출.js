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
    let N = input[0].split(" ").map(Number)[0]
    let K = input[0].split(" ").map(Number)[1]
    let sale = input[1].split(" ").map(Number)
    let sum = 0
    let result = []
    
   
    for(let i=0; i<=N-K; i++){ // 연속된 K일 조건에 맞게 설정 => K일수가 성립되지 않으면, for문은 NaN을 출력 
        for(let j=i; j<i+K; j++) {
            sum += sale[j]
        }
        result.push(sum)
        sum = 0
    }
    //console.log(result)
    console.log(Math.max(...result))

    process.exit()
})