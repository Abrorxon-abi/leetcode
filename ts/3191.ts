function minOperations(nums: number[]): number {
  let acc = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[i] = 1;
      if (nums[i + 1] === undefined || nums[i + 2] === undefined) return -1;
      nums[i + 1] = 1 - nums[i + 1];
      nums[i + 2] = 1 - nums[i + 2];
      acc++;
    }
  }

  return acc;
}
