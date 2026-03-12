function maxAdjacentDistance(nums: number[]): number {
  let max = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(Math.abs(nums[i] - nums[i + 1]), max);
  }

  max = Math.max(Math.abs(nums[0] - nums[nums.length - 1]), max);
  return max;
}
