function rank(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let rank = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) rank++;
    }
    answer.push(rank);
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(rank(arr));
