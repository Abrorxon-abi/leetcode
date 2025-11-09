function findMissingElements(nums: number[]): number[] {
  const ans = [];
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  for (let i = min + 1; i < max; i++) {
    if (!nums.includes(i)) {
      ans.push(i);
    }
  }

  return ans;
}
