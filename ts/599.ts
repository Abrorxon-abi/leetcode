function findRestaurant(list1: string[], list2: string[]): string[] {
  const map = new Map();

  for (let i = 0; i < list1.length; i++) {
    if (list2.includes(list1[i])) {
      const idx = list2.indexOf(list1[i]);
      map.set(list1[i], i + idx);
    }
  }

  if (map.size === 1) return [map.keys().next().value];

  const ans: string[] = [];
  let min = Infinity;

  for (const val of map.values()) {
    min = Math.min(min, val);
  }

  for (const key of map.keys()) {
    if (map.get(key) === min) ans.push(key);
  }

  return ans;
}
