function arrayPairSum(nums: number[]): number {
  let acc = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) acc += nums[i];
  }

  return acc;
}
