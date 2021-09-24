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
    let sum = 0
    let max = 0
    let result = 0
  
    for(let i=0; i<input[0]; i++){
        for(let j=0; j<num[i].length; j++){
            sum += +num[i][j] 
        }
        if(sum > max) {
            max = sum
            result = num[i]
        } else if(sum === max) {  // 자릿수의 합이 같은 경우
            if(num[i] > result) result = num[i]
        }
        sum = 0
    }
    console.log(result)

    process.exit()
})