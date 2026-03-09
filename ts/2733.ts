function findNonMinOrMax(nums: number[]): number {
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  for (let n of nums) {
    if (n !== max && n !== min) return n;
  }

  return -1;
}
