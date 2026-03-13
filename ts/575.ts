function distributeCandies(candyType: number[]): number {
  const set = new Set(candyType);
  const n = candyType.length / 2;

  return set.size > n ? n : set.size;
}
