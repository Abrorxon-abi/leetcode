function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  const map = new Map();
  const arr = [...items1, ...items2];

  for (const [val, weight] of arr) {
    map.set(val, (map.get(val) ?? 0) + weight);
  }

  return [...map.entries()].sort((a, b) => a[0] - b[0]);
}
