function canBeEqual(target: number[], arr: number[]): boolean {
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < target.length; i++) {
    map1.set(target[i], (map1.get(target[i]) ?? 0) + 1);
    map2.set(arr[i], (map2.get(arr[i]) ?? 0) + 1);
  }

  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) {
      return false;
    }
  }

  return true;
}
