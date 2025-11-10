function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const len = grid.length;
  const set = new Set();
  let duplicate = -1;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const val = grid[i][j];
      if (set.has(val)) {
        duplicate = val;
      } else {
        set.add(val);
      }
    }
  }

  for (let i = 1; i <= len * len; i++) {
    if (!set.has(i)) {
      return [duplicate, i];
    }
  }
}
