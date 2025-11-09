function sumIndicesWithKSetBits(nums: number[], k: number): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) {
    const ones = i.toString(2).match(/1/g)?.length || 0;
    if (ones === k) acc += nums[i];
  }

  return acc;
}
