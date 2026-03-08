function absDifference(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  return Math.abs(
    nums.slice(0, k).reduce((acc, n) => (acc += n), 0) -
      nums.slice(nums.length - k).reduce((acc, n) => (acc += n), 0),
  );
}
