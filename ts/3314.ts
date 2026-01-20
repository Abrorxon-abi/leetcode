function minBitwiseArray(nums: number[]): number[] {
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      ans.push(-1);
      continue;
    }

    let found = false;

    for (let j = 0; j < nums[i]; j++) {
      if ((j | (j + 1)) == nums[i]) {
        ans.push(j);
        found = true;
        break;
      }
    }

    if (!found) {
      ans.push(-1);
    }
  }

  return ans;
}
