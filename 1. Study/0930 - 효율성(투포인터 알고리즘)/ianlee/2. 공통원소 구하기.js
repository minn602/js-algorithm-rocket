function interArr(arr1, arr2) {
    let answer=[];
    for (let i=0; i<arr1.length; i++){
      for (let j=0; j<arr2.length; j++){
        if(arr1[i]===arr2[j]){
          answer.push(arr1[i]);
          answer.sort();
        }
      }
    }
    return answer;
  }
  
  let arr1 = [1, 3, 9, 5, 2];
  let arr2 = [3, 2, 5, 7, 8];
  
  console.log(interArr(arr1, arr2));