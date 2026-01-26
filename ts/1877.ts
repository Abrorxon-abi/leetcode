function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let first = 0;
  let last = nums.length - 1;
  let max = -Infinity;

  while (first < last) {
    max = Math.max(max, nums[first] + nums[last]);
    first++;
    last--;
  }

  return max;
}
