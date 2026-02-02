function minIncrementForUnique(nums: number[]): number {
  let acc = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    while (nums[i + 1] <= nums[i]) {
      acc++;
      nums[i + 1]++;
    }
  }

  return acc;
}
