function distinctDifferenceArray(nums: number[]): number[] {
  const arr: number[] = [];
  const ans: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
    const slicedSet = new Set(nums.slice(i + 1));
    const setArr = new Set(arr);
    ans.push(setArr.size - slicedSet.size);
  }

  return ans;
}
