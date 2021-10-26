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