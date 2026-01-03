function countDistinctIntegers(nums: number[]): number {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    nums.push(Number(nums[i].toString().split("").reverse().join("")));
  }

  const set = new Set(nums);

  return set.size;
}
