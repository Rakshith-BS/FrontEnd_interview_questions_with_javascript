Array.prototype.myMap = function (callback) {
  var arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

const output = [1, 2, 3].myMap((curr) => {
  return curr + 2;
});

console.log(output);
