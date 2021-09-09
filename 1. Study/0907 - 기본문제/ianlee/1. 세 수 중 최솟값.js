function minNum(a, b, c) {
  let min;
  if (a < b) {
    min = a;
  } else {
    min = b;
  }
  if (c < min) min = c;
  return min;
}

console.log(minNum(2, 5, 1));
