function runningSum(nums: number[]): number[] {
  let total = 0;
  const ans = nums.map((n) => {
    let num = n + total;
    total += n;
    return num;
  });
  return ans;
}
