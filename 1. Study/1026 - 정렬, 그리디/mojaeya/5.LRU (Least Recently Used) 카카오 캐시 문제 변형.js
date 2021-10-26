// 그리디 알고리즘은 문제 해결과정에서 순간순간마다 최적이라고 생각되는 해를 선택하여, 최종 해답에 도달하는 문제 해결 방식이다.

// 입력 예제
// 5 9
// 1 2 3 2 6 2 3 5 7
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
    let S = input[0].split(" ").map(Number)[0]  // 캐시 크기
    let N = input[0].split(" ").map(Number)[1]  /// 작업의 개수
    let workNum = input[1].split(" ").map(Number) // 작업 번호

    let cache = []; cache.length = S;
    console.log("캐시 메모리 상태 변화")
    for(let i=0; i<N; i++) {
        if(cache.indexOf(workNum[i]) === -1) {
            cache.unshift(workNum[i])
            cache.pop()
        } else {
            let idx = cache.indexOf(workNum[i])
            cache.splice(idx,1)
            cache.unshift(workNum[i])
        }
        console.log(cache)
    }

    process.exit()
})