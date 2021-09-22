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
    let N = input[0].split(" ").map(Number)[0]  // 학생수
    let M = input[0].split(" ").map(Number)[1]  // 총 예산
    let goods = []
    let count = 0
    let result = 0

    for(let i=1; i<=N; i++) {
        let arr = input[i].split(" ").map(Number)
        goods.push([arr[0], arr[1]])
    }
    // goods = [
    //     [6, 6],
    //     [2, 2],
    //     [4, 3],
    //     [4, 5],
    //     [10, 3]
    //   ]
    goods.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))  

    for(let i=0; i<N; i++) {
        let budget = M - (goods[i][0]/2 + goods[i][1]) // 총 예산 - (할인적용한 상품 값 + 배송비)
        count = 1
        for(let j=0; j<N; j++) {
            if(j !== i && (goods[j][0] + goods[j][1]) <= budget) { // i는 이미 위에서 구매처리 됐기 때문에 포함하면 X
                budget -= (goods[j][0] + goods[j][1])
                count++
            } else break
        }
        result = Math.max(result, count) 
    }
    console.log(result)
    
    process.exit()
})