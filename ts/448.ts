function findDisappearedNumbers(nums: number[]): number[] {
  const ans = [];
  const set = new Set(nums);

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      ans.push(i);
    }
  }

  return ans;
}
