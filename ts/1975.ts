function maxMatrixSum(matrix: number[][]): number {
  let sum = 0;
  let negativeCount = 0;
  let minAbs = Infinity;

  for (const row of matrix) {
    for (const val of row) {
      if (val < 0) negativeCount++;
      const absVal = Math.abs(val);
      sum += absVal;
      minAbs = Math.min(minAbs, absVal);
    }
  }

  if (negativeCount % 2 === 0) {
    return sum;
  }

  return sum - 2 * minAbs;
}
