// Problem Statement: https://leetcode.com/problems/single-number/description/

function singleNumber(nums: number[]): number {
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num ^= nums[i];
  }

  return num;
}
