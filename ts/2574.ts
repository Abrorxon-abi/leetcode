function leftRightDifference(nums: number[]): number[] {
  let total = nums.reduce((acc, n) => (acc += n));
  let leftSum = 0;
  let rightSum = 0;
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    rightSum = total - leftSum - nums[i];
    ans.push(Math.abs(leftSum - rightSum));
    leftSum += nums[i];
  }

  return ans;
}
