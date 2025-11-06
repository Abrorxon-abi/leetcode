function triangularSum(nums: number[]): number {
  while (nums.length > 1) {
    const arr = [];
    for (let j = 0; j < nums.length - 1; j++) {
      arr[j] = (nums[j] + nums[j + 1]) % 10;
    }
    nums = [...arr];
  }

  return nums[0];
}
