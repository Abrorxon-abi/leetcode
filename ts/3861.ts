function minimumIndex(capacity: number[], itemSize: number): number {
  let minN = Infinity;

  for (let i = 0; i < capacity.length; i++) {
    if (capacity[i] >= itemSize) {
      minN = Math.min(capacity[i], minN);
    }
  }

  return minN === Infinity ? -1 : capacity.indexOf(minN);
}
