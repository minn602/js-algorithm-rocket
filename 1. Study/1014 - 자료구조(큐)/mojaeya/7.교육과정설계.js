let required = "CBA"
let plan = "CBDAGE"

console.log(solution(required, plan))

// 풀이 1
function solution(required, plan) {
    let arr = Array.from(required) 
    let temp = []
    for(let x of plan) {
        if(arr.includes(x)) temp.push(x)
    }
    return arr.join(",") === temp.join(",") ? "YES" : "NO"
}

// 풀이 2
function solution(required, plan) {
    let queue = Array.from(required)  
    for(let x of plan) {
        if(queue.includes(x)) {
            if(x !== queue.shift()) return "NO"
        }
    }
    return queue.length>0 ? "NO" : "YES"
}
