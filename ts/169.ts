// Problem Statement: https://leetcode.com/problems/majority-element/description/

function majorityElement(nums: number[]): number {
  let candidate = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }

    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}
