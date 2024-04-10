let cache = {};
function factorial(num) {
  if (num === 0 || num === 1) return 0;
  let res = 1;

  if (cache[num]) {
    console.log("cached value");
    return cache[num];
  } else {
    console.log("not cached value");
    for (let i = 2; i <= num; i++) {
      cache[num] = res * i;
      res = res * i;
    }
  }

  return res;
}
console.log(factorial(5));
console.log(factorial(5));
console.log(factorial(5));
