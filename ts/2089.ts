function targetIndices(nums: number[], target: number): number[] {
  const result = [];

  const sortedNums = nums.toSorted((a, b) => a - b);
  let idx = sortedNums.findIndex((i) => i === target);

  for (let i = idx; sortedNums[i] === target; i++) {
    result.push(i);
  }

  return result;
}
