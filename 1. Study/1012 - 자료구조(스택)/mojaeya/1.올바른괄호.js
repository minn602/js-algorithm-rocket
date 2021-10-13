// 풀이 1
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', function(line){
   str = line
   rl.close()
})
  .on('close', function(){
    let left = [], right = []
    let begin = str[0], end =  str[str.length-1] 

    for(let i=1; i<str.length-1; i++) {
        str[i] === "(" ? left.push(str[i]) : right.push(str[i])
    }

    if(begin === "(" && end === ")") {
        arr1.length === arr2.length ? console.log("YES") : console.log("NO")
    } else {
        console.log("NO")
    }
  
    process.exit()
})


// 풀이 2
function solution(s){
    let stack = [], cnt = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] === '(') {
            stack.push('(');
            cnt++
        }
        else {
            stack.pop();
            cnt--
        }
    }
    if(stack.length > 0 || cnt !== 0) return false
    else return true
}
console.log(solution('(()(()))(()'))