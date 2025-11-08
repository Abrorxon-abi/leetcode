function arithmeticTriplets(nums: number[], diff: number): number {
  let acc = 0;

  for (let i = 0; i < nums.length; i++) {
    let num2 = nums[i] + diff;
    let num3 = nums[i] + diff * 2;

    if (nums.includes(num2) && nums.includes(num3)) {
      acc++;
    }
  }

  return acc;
}
