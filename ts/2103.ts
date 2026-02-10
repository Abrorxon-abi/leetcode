function countPoints(rings: string): number {
  const map = new Map();
  const arr = rings.match(/.{1,2}/g) ?? [];
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(Number(arr[i][1]))) {
      map.set(Number(arr[i][1]), new Set());
    }
    map.get(Number(arr[i][1])).add(arr[i][0]);
  }

  for (let set of map.values()) {
    if (set.size === 3) counter++;
  }

  return counter;
}
