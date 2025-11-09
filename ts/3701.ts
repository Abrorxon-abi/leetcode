function alternatingSum(nums: number[]): number {
  let acc = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      acc += nums[i];
    } else {
      acc -= nums[i];
    }
  }

  return acc;
}
