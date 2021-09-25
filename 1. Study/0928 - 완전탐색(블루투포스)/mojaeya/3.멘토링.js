const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function(line){
    input.push(line.split(" ").map((el) => +el)) // // 한줄 입력 결과가 2차원 배열로 input에 들어가도록
})
  .on('close', function(){
    let N = input[0][0]  // 학생수
    let M = input[0][1]  // 수학테스트 횟수
    let test = input.slice(1)
    // let test = [
    //     [3, 4, 1, 2],
    //     [4, 3, 2, 1],
    //     [3, 1, 4, 2]
    //   ]
    let result = []
    let answer = 0

    for(let A=1; A<=N; A++) {   // A : 멘토 자리
        for(let B=1; B<=N; B++) {  // B : 멘티 자리
            let count = 0
            for(let i=0; i<M; i++) {  // 수학테스트 케이스
                let rankA = 0
                let rankB = 0
                for(let j=0; j<N; j++) { // 학생 수 케이스
                    if(test[i][j] === A) rankA = j // A 멘토자리에 해당하는 학생의 등수
                    if(test[i][j] === B) rankB = j // B 멘티자리에 해당하는 학생의 등수
                }
                if(rankA < rankB) count++
            }
            if(count === M) {
                result.push(`(${A},${B})`)
                answer++
            }
        }
    }
    console.log("===========")
    console.log(answer)
    console.log(result.join(",") + "와 같이 3가지의 경우의 (멘토, 멘티) 짝을 만들 수 있다.")
    

    process.exit()
})
