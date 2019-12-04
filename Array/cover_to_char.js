/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let singleDigs = "";
  let calcNum = n;
  while (calcNum > 0) {
    singleDigs = String.fromCharCode(65 + ((calcNum-1) % 26)) + singleDigs;
    calcNum =
      calcNum % 26 === 0
        ? Math.floor(calcNum / 26) - 1
        : Math.floor(calcNum / 26);
  }

  return singleDigs;
};

console.log(convertToTitle(1));
