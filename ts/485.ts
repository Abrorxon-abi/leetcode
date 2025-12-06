function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) {
      counter = 0;
    } else {
      counter++;
      max = Math.max(max, counter);
    }
  }

  return max;
}
