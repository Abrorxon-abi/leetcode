function repeatedNTimes(nums: number[]): number {
  const set = new Set();
  for (let n of nums) {
    if (set.has(n)) return n;
    set.add(n);
  }

  return -1;
}
