function Kmax(k, arr){
  let answer, sum=[];
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      for(let z=j+1; z<arr.length; z++){
        sum.push(arr[i]+arr[j]+arr[z]);
      }
    }
  }
  let max=Array.from(sum).sort((a, b)=>b-a);
  answer=max[k-1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(Kmax(3, arr));