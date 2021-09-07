//대문자 아스키코드 범위65~90
//소문자 아스키코드 범위97~122
//32 차이로 대소문자 변환가능

function solution(str) {
  let count = 0,
    answer = "";

  for (let x of str) {
    if (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90) {
      count++;
      answer += x.toLowerCase();
    } else {
      answer += x.toUpperCase();
    }
  }

  console.log(count, str.toUpperCase(), answer);
}

solution("JavaScriptAlgorithmRocketStudy");
