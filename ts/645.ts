function findErrorNums(nums: number[]): number[] {
  const ans = [];
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      ans.push(nums[i]);
    }
    set.add(nums[i]);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      ans.push(i);
      return ans;
    }
  }

  return [];
}
