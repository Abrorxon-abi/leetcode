function numberGame(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    ans.push(nums[i + 1], nums[i]);
  }
  return ans;
}
