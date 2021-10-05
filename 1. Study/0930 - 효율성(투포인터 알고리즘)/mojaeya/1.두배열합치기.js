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
    let arrN = input[1].split(" ").map(Number)
    let M = +input[2]
    let arrM = input[3].split(" ").map(Number)

    let arr = []

    for(let x of arrN) {
        arr.push(x)
    }
    for(let x of arrM) {
        arr.push(x)
    }
    
    arr.sort((a,b) => a-b)
    console.log(arr.join(" "))

    process.exit()
})