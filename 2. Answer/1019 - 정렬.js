// 📚 1. 선택정렬
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

// 📚 2. 버블정렬
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

// 📚 3. Special Sort
// 1)
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

// 2)
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    if (x < 0) answer.push(x);
  }
  for (let x of arr) {
    if (x > 0) answer.push(x);
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

// 📚 4. 삽입정렬
// 1)
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

// 2)
function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (arr[i] < answer[j]) {
        answer.splice(j, 0, arr[i]);
        break;
      }
    }
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
