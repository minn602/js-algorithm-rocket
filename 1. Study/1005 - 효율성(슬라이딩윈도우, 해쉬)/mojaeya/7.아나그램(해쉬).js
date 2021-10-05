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
    let str1 = input[0]
    let str2 = input[1]
    let word = new Map()
    let result = "YES"

    for(let x of str1) {
      if(word.has(x)) word.set(x,word.get(x)+1)
      else word.set(x,1)
    }

    console.log(word)

    for(let x of str2) {
      if(!word.has(x) || word.get(x) < 1) {
        result = "NO"
        break
      }
      word.set(x,word.get(x)-1) // 공통된 key의 value값을 하나씩 빼준다.
      //console.log(word)
    }
    console.log(result)

    process.exit()
})