function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map();
  const set = new Set();

  for (let n of arr) {
    map.set(n, (map.get(n) ?? 0) + 1);
  }

  for (let val of map.values()) {
    if (!set.has(val)) {
      set.add(val);
    } else {
      return false;
    }
  }

  return true;
}
