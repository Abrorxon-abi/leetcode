// Problem Statement: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

function smallerNumbersThanCurrent(nums: number[]): number[] {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    let counter = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) counter++;
    }
    ans[i] = counter;
  }
  return ans;
}
