function frequencySort(nums: number[]): number[] {
  const map = new Map();

  for (const n of nums) {
    map.set(n, (map.get(n) ?? 0) + 1);
  }

  nums.sort((a, b) => {
    const freqA = map.get(a);
    const freqB = map.get(b);

    if (freqA === freqB) {
      return b - a;
    }

    return freqA - freqB;
  });

  return nums;
}
