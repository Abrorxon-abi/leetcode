function minimumDifference(nums: number[], k: number): number {
  if (nums.length === k) {
    return Math.max(...nums) - Math.min(...nums);
  }

  nums.sort((a, b) => a - b);

  let minDiff = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let max = nums[i + k - 1];
    let diff = max - min;

    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}
