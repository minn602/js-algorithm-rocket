function edu(essential, lecture) {
  let answer = "YES";
  let queue = essential.split("");
  // ["C", "B", "A"]

  for (let x of lecture) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
}

let essential = "CBA";
let lecture = "CBDAGE";
console.log(edu(essential, lecture));
