function countPartitions(nums: number[]): number {
  const sum = nums.reduce((acc, n) => (acc += n), 0);

  if (sum % 2 !== 0) return 0;

  return nums.length - 1;
}
