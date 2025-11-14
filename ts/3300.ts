function minElement(nums: number[]): number {
  let min = Infinity;

  for (let i = 0; i < nums.length; i++) {
    min = Math.min(
      nums[i]
        .toString()
        .split("")
        .reduce((sum, digit) => sum + parseInt(digit), 0),
      min
    );
  }

  return min;
}
