function sortColors(nums: number[]): void {
  let left = 0;
  let right = nums.length - 1;

  for (let i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      let tmp = nums[i];
      nums[i] = nums[left];
      nums[left] = tmp;
      left++;
    } else if (nums[i] === 2) {
      let tmp = nums[i];
      nums[i] = nums[right];
      nums[right] = tmp;
      right--;
      i--;
    }
  }
}
