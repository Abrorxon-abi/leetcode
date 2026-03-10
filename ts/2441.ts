function findMaxK(nums: number[]): number {
  let max = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(-nums[i])) max = Math.max(max, nums[i]);
  }

  return max;
}
