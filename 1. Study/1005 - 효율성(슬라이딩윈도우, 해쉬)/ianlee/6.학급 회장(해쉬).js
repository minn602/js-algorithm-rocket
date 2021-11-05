// Hash
// 임의의 크기를 가진 데이터(Key)를 고정된 크기의 데이터(Value)로 변화시켜 저장하는 것
// 해시 값 자체를 index로 사용하기 때문에 평균 시간 복잡도가 O(1)로 매우 빠름

function classPresident(vote) {
  let answer,
    max = 0;
  let hash = new Map(); // Map이라는 해쉬객체 생성(key와 value이 한쌍)

  for (let x of vote) {
    if (hash.has(x)) hash.set(x, hash.get(x) + 1);
    // 기존값을 가져와서 +1
    else hash.set(x, 1); // 없으면 x라는 key를 만들고 기존값 1
  }

  console.log(hash);

  for (let [key, value] of hash) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

let vote = "BACBACCACCBDEDE";
console.log(classPresident(vote));
