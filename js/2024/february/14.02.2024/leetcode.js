/**
 * @param {number[]} nums
 * @return {number[]}
 */

var rearrangeArray = function (nums) {
  const positiveNumbers = nums.filter((num) => num > 0);
  const negativeNumbers = nums.filter((num) => num < 0);

  const result = [];

  for (let i = 0; i < positiveNumbers.length; i++) {
    result.push(positiveNumbers[i]);
    result.push(negativeNumbers[i]);
  }

  return result;
};
