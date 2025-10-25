// Problem Statement: https://leetcode.com/problems/third-maximum-number/description/

function thirdMax(nums: number[]): number {
  const sortedNums = [...new Set(nums)].sort((a, b) => b - a);

  return sortedNums.length >= 3 ? sortedNums[2] : sortedNums[0];
}
