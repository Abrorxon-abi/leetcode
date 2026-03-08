function findLucky(arr: number[]): number {
  const map = new Map();
  let max = -Infinity;

  for (const ch of arr) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  for (const [key, val] of map.entries()) {
    if (key === val) max = Math.max(max, key);
  }

  return Math.max(max, -1);
}
