function minOperations(nums: number[], k: number): number {
  return nums.length - nums.filter((n) => n >= k).length;
}
