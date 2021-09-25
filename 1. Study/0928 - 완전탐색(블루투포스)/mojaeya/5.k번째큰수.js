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
    let card = input[1].split(" ").map(Number)

    let only = new Set()
    // set(): 중복되는 값은 딱 한 번만 저장하는, 즉 중복을 제거하는 자료구조.
    // 단, set자료구조는 sort() 기능이 없으므로, 다시 배열로 만들어 준 뒤, sort()를 취해주어야 한다.. 
    
    for(let i=0; i<N; i++) {
        for(let j=i+1; j<N; j++) {
            for(let k=j+1; k<N; k++) {
                only.add(card[i] + card[j] + card[k])
            }
        }
    }

    let arr = Array.from(only).sort((a,b) => b-a)
    console.log(arr[K-1])

    process.exit()
})