function evenNumberBitwiseORs(nums: number[]): number {
  let ans = 0;

  for (let n of nums) {
    if (n % 2 === 0) {
      ans |= n;
    }
  }

  return ans;
}
