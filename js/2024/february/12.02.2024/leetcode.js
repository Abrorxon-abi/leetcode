/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  let majorityElement = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majorityElement = nums[i];
      count = 1;
    } else if (nums[i] === majorityElement) {
      count++;
    } else {
      count--;
    }
  }

  return majorityElement;
};
