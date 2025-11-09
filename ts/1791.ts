function findCenter(edges: number[][]): number {
  const flattedArr = edges.flat();
  const obj: Record<number, number> = {};

  for (let i = 0; i < flattedArr.length; i++) {
    obj[flattedArr[i]] = (obj[flattedArr[i]] || 0) + 1;
    if (obj[flattedArr[i]] === 2) return flattedArr[i];
  }

  return -1;
}
