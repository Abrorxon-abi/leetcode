function sumOfUnique(nums: number[]): number {
  const set: Set<number> = new Set();
  const dontAdd: Set<number> = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
      dontAdd.add(nums[i]);
    } else if (!dontAdd.has(nums[i])) {
      set.add(nums[i]);
    }
  }

  return [...set].reduce((acc, n) => (acc += n), 0);
}
