function sortArrayByParity(nums: number[]): number[] {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      ans.unshift(nums[i]);
    } else {
      ans.push(nums[i]);
    }
  }
  return ans;
}
