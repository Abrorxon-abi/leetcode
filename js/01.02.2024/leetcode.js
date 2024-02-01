/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */

var divideArray = function (nums, k) {
  nums.sort((a, b) => a - b);
  let result = [];
  let i = 0;
  while (i < nums.length) {
    let currentArray = [nums[i]];
    let j = i + 1;
    while (j < nums.length && j < i + 3 && nums[j] - nums[i] <= k) {
      currentArray.push(nums[j]);
      j++;
    }
    if (currentArray.length === 3) {
      result.push(currentArray);
      i = j;
    } else {
      return [];
    }
  }
  return result;
};
