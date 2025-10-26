// Problem Statement: https://leetcode.com/problems/binary-search/description/

function search(nums: number[], target: number): number {
  let left = -1;
  let right = nums.length;

  while (right - left > 1) {
    let mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return -1;
}
