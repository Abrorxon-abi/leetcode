function pickGifts(gifts: number[], k: number): number {
  while (k != 0) {
    const max = Math.max(...gifts);
    const idx = gifts.indexOf(max);
    gifts[idx] = Math.floor(Math.sqrt(max));
    k--;
  }

  return gifts.reduce((acc, n) => (acc += n), 0);
}
