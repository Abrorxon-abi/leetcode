// Problem Statement: https://leetcode.com/problems/search-insert-position/description/

function searchInsert(nums: number[], target: number): number {
  let left = -1;
  let right = nums.length;

  let mid = 0;

  while (right - left > 1) {
    mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return nums[mid] > target ? mid : mid + 1;
}
