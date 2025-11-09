function getFinalState(
  nums: number[],
  k: number,
  multiplier: number
): number[] {
  for (let i = 0; i < k; i++) {
    let smallest = Math.min(...nums);
    let index = nums.findIndex((n) => n === smallest);
    nums[index] = smallest * multiplier;
  }

  return nums;
}
