/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */

var sequentialDigits = function (low, high) {
  const result = [];
  const digits = "123456789";

  for (
    let length = String(low).length;
    length <= String(high).length;
    length++
  ) {
    for (let start = 0; start + length <= 9; start++) {
      const num = parseInt(digits.substr(start, length));
      if (num >= low && num <= high) {
        result.push(num);
      }
    }
  }

  return result;
};
