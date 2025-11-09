function transformArray(nums: number[]): number[] {
  return nums
    .map((n) => {
      return n % 2 === 0 ? 0 : 1;
    })
    .sort((a, b) => a - b);
}
