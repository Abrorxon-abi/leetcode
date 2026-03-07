function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (Math.abs(i - j) <= k && nums[j] == key) ans.push(i);
    }
  }

  return [...new Set(ans)];
}
