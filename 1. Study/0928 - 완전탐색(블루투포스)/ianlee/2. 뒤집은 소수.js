function isPrime(num) {
  for(let i=2; i<num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return 1 < num;
}

function solution(arr){
  let answer=[];
  for (let x of arr){
    let tmp=Number(x.toString().split('').reverse().join(''));
    if(isPrime(tmp)) answer.push(tmp);
  }
  return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr))