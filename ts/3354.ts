function countValidSelections(nums: number[]): number {
  let ans = 0;

  if (nums.length === 1 && nums[0] === 0) return 2;

  for (let i = 0; i < nums.length; i++) {
    let leftAcc = 0;
    let rightAcc = 0;

    if (nums[i] === 0) {
      for (let j = 0; j < nums.length; j++) {
        if (j < i) leftAcc += nums[j];
        if (j > i) rightAcc += nums[j];
      }

      if (Math.abs(leftAcc - rightAcc) === 0) ans += 2;
      if (Math.abs(leftAcc - rightAcc) === 1) ans += 1;
    }
  }

  return ans;
}
