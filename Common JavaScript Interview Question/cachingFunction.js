function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2, num3) {
  return num1 * num2 * num3;
}

function getUniqueId(fn, args) {
  let uniqueId = [];
  uniqueId = uniqueId.concat(fn.name, args);
  return uniqueId.join("|");
}

function memoise(fn) {
  let cache = {};
  return function (...args) {
    let uniqueId = getUniqueId(fn.name, args);
    console.log(cache);
    if (cache[uniqueId]) {
      console.log("from cache");
      return cache[uniqueId];
    } else {
      console.log("not from cache");
      cache[uniqueId] = fn(...args);
      return cache[uniqueId];
    }
  };
}

let memoiseAdd = memoise(add);
let memoiseMutliply = memoise(multiply);
console.log(memoiseMutliply(10, 20, 30));
console.log(memoiseMutliply(10, 20, 30));
