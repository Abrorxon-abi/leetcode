function minRemoval(nums: number[], k: number): number {
  if (nums.length === 1) return 0;

  nums.sort((a, b) => a - b);
  let keep = 1;
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    while (j < nums.length && nums[j] <= k * nums[i]) {
      j++;
    }
    keep = Math.max(keep, j - i);
  }

  return nums.length - keep;
}
