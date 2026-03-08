function sumDivisibleByK(nums: number[], k: number): number {
  let acc = 0;
  const map = new Map();

  for (const ch of nums) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  for (const [key, val] of map.entries()) {
    if (val % k === 0) {
      for (let i = 0; i < val; i++) {
        acc += key;
      }
    }
  }

  return acc;
}
