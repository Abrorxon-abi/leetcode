function constructTransformedArray(nums: number[]): number[] {
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      result[i] = 0;
      continue;
    }

    if (nums[i] > 0) {
      const val = nums[i] % n;
      const index = (i + val) % n;
      result.push(nums[index]);
    } else if (nums[i] < 0) {
      const val = Math.abs(nums[i]) % n;
      const index = i - val >= 0 ? i - val : n + (i - val);
      result.push(nums[index]);
    }
  }

  return result;
}
