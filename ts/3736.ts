function minMoves(nums: number[]): number {
  const maxNum = Math.max(...nums);
  let acc = 0;

  for (let n of nums) {
    acc += maxNum - n;
  }

  return acc;
}
