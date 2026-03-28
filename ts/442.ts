function findDuplicates(nums: number[]): number[] {
  const set = new Set();
  const ans = [];

  for (let n of nums) {
    if (set.has(n)) {
      ans.push(n);
    }
    set.add(n);
  }

  return ans;
}
