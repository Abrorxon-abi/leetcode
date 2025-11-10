function subarraySum(nums: number[]): number {
  let acc = 0;

  for (let i = 0; i < nums.length; i++) {
    let start = Math.max(0, i - nums[i]);
    let sum = nums.slice(start, i + 1).reduce((acc, n) => (acc += n), 0);
    acc += sum;
  }

  return acc;
}
