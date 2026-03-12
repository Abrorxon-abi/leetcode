function maxKDistinct(nums: number[], k: number): number[] {
  const set = new Set(nums.sort((a, b) => b - a));
  return set.size < k ? [...set] : [...set].slice(0, k);
}
