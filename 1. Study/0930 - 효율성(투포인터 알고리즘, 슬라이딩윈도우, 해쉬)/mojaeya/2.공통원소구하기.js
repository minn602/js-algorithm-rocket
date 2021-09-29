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
    let N = +input[0] 
    let A = input[1].split(" ").map(Number) 
    let M = +input[2] 
    let B = input[3].split(" ").map(Number) 

    let result = []

    for(let x of A) {
        for(let j of B) {
            if(x===j) result.push(x)
        }
    }
    result.sort((a,b) => a-b)
    console.log(result.join(" "))

    process.exit()
})