function minimumOperations(nums: number[]): number {
  const set = new Set(nums.filter((n) => n > 0));
  return set.size;
}
