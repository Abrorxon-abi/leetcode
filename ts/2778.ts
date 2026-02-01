function sumOfSquares(nums: number[]): number {
  let acc = 0;
  for (let i = 1; i <= nums.length; i++) {
    if (nums.length % i === 0) {
      acc += nums[i - 1] * nums[i - 1];
    }
  }

  return acc;
}
