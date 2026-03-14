function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
    if (set.size > k) {
      set.delete(set.values().next().value);
    }
  }

  return false;
}
