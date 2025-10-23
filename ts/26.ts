// Problem Statement: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

function removeDuplicates(nums: number[]): number {
  let unique = [...new Set(nums)];
  nums.length = 0;
  nums.push(...unique);

  return nums.length;
}
