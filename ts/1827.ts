function minOperations(nums: number[]): number {
  let acc = 0;
  let j = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    while (nums[j] <= nums[i]) {
      acc++;
      nums[j]++;
    }
    j++;
  }

  return acc;
}
