function numberOfPairs(nums: number[]): number[] {
  const set = new Set();
  let acc = 0;

  for (let n of nums) {
    if (set.has(n)) {
      set.delete(n);
      acc++;
    } else {
      set.add(n);
    }
  }

  return [acc, set.size];
}
