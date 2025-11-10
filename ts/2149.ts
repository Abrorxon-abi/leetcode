function rearrangeArray(nums: number[]): number[] {
  const pos = nums.filter((n) => n >= 0);
  const neg = nums.filter((n) => n < 0);
  const ans = [];

  for (let i = 0; i < pos.length; i++) {
    ans.push(pos[i]);
    ans.push(neg[i]);
  }

  return ans;
}
