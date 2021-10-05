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
    let N = +input[0]  // 굳이 필요가 없다.
    let ballot  = input[1]
    let vote = new Map()
    let max = 0
    let candidate

    for(let x of ballot) {
      if(vote.has(x)) vote.set(x,vote.get(x)+1)
      else vote.set(x,1)
    }

    // Map.prototype.forEach()
    // forEach((value, key) => { ... } )
    vote.forEach((value, key) => {
      if(value > max) {
        max = value
        candidate = key
      }
    })
    //console.log(vote)
    console.log(candidate)

    process.exit()
})