function findLengthOfLCIS(nums: number[]): number {
  let acc = 1;
  let max = acc;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= nums[i + 1]) {
      acc = 1;
    } else {
      acc++;
    }
    max = Math.max(max, acc);
  }

  return max;
}
