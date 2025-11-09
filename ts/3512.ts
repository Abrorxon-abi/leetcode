function minOperations(nums: number[], k: number): number {
  return nums.reduce((acc, n) => (acc += n)) % k;
}
