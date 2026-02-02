function minimumCost(nums: number[]): number {
  let firstNum = nums[0];
  nums = nums.slice(1);
  nums.sort((a, b) => a - b);
  return firstNum + nums[0] + nums[1];
}
