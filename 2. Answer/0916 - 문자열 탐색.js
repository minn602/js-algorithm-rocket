// 📚 1. 회문문자열
// 1)
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  return answer;
}

let str = "goooG";
console.log(solution(str));

// 2)
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  if (s.split("").reverse().join("") != s) return "NO";
  return answer;
}

let str = "gooG";
console.log(solution(str));

// 📚 2. 유효한 팰린드롬
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

// 📚 3. 숫자만 추출
function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));

// 📚 4. 가장 짧은 문자거리
function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));

// 📚 5. 문자열 압축
function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
