function rowAndMaximumOnes(mat: number[][]): number[] {
  let max = [0, 0];

  for (let i = 0; i < mat.length; i++) {
    const sum = mat[i].reduce((acc, n) => (acc += n), 0);
    if (sum > max[1]) {
      max[0] = i;
      max[1] = sum;
    }
  }

  return max;
}
