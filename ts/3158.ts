function duplicateNumbersXOR(nums: number[]): number {
  let acc = 0;
  const set = new Set();

  for (let ch of nums) {
    if (set.has(ch)) {
      acc ^= ch;
    } else {
      set.add(ch);
    }
  }

  return acc;
}
