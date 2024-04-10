var arr1 = ["testInput", "testOuput", "test", "tesco"];

function longestCommonPrefix(arr1) {
  if (!arr1.length) return "";
  for (let i = 0; i <= arr1[0].length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[0][i] !== arr1[j][i]) {
        return arr1[0].slice(0, i);
      }
    }
  }
  return arr1[0];
}

// console.log(longestCommonPrefix(arr1));

function map(f, a) {
  let result = [];
  let i;
  for (i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
    console.log(result);
    return result;
  }
}
const f = function (x) {
  return x * x * x;
};
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);
