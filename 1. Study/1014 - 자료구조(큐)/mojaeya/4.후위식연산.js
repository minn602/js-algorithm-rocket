function solution(s) {
  let stack = []
  for(let x of s) {
    if(!isNaN(x)) stack.push(+x);
      else {
      let two = stack.pop()
      let one = stack.pop()
      switch(x) {
        case '+': stack.push(one + two) 
        break;
        case '-': stack.push(one - two)
        break;
        case '*': stack.push(one * two)
        break;
        case '/': stack.push(one / two)
        break;
      }
    } 
  }
  return +stack
}

let postfix = '352+*9-'
console.log(solution(postfix))




