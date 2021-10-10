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
    let M = input[0].split(" ").map(Number)[1]
    let seq = input[1].split(" ").map(Number)
    let sum = 0
    let cnt = 0
    // let result = []

    for(let i=0; i<N; i++){
        for(let j=i; j<N; j++) {
            sum += seq[j]
            if(sum <= M) {
                cnt++
                // for(let k=i; k<=j; k++) {
                //     result.push(seq[k])
                // }
                // console.log(result)
                // result.length = 0
            } else break
        }
        sum = 0
    }
    console.log(cnt)


    process.exit()
})