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
    let num = input[1].split(" ")
    let revNum = 0
    let cnt = 0
    let result = []

    for(let i=0; i<input[0]; i++){
        for(let j=num[i].length-1; j>=0; j--){
            revNum += num[i][j]
        }
        revNum = Number(revNum)   // 앞에 자리가 0인경우 처리

        for(let k=1; k<=revNum; k++){ // 소수 : 1과 자기자신만을 약수로 가지는 수
            if(revNum % k === 0) cnt++
        }
        if(cnt === 2) result.push(revNum)

        cnt = 0
        revNum = 0
    }
    console.log(result.join(" "))

    process.exit()
})