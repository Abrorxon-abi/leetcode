function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const max1 = nums[n - 1];
  const max2 = nums[n - 2];
  const max3 = nums[n - 3];
  const min1 = nums[0];
  const min2 = nums[1];

  const posMax = max1 * max2 * max3;
  const posMin = min1 * min2 * max1;

  return posMax > posMin ? posMax : posMin;
}
