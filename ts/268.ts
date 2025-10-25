// Problem Statement: https://leetcode.com/problems/missing-number/description/

function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let left = -1;
  let right = nums.length;

  while (right - left > 1) {
    let mid = Math.floor((right + left) / 2);

    if (nums[mid] === mid) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return right;
}
