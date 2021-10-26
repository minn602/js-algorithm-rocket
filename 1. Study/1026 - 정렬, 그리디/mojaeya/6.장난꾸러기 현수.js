// 그리디 알고리즘은 문제 해결과정에서 순간순간마다 최적이라고 생각되는 해를 선택하여, 최종 해답에 도달하는 문제 해결 방식이다.

function solution(arr) {
    let result = []
    let origin = [...arr]  // arr.slice()
    let array = arr.sort((a,b) => a-b)
    for(let i=0; i<arr.length; i++) {
        if(origin[i] !== array[i]) result.push(i+1)
    }
    return result.join(" ")
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160]
console.log(solution(arr))