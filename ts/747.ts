function dominantIndex(nums: number[]): number {
  const big = Math.max(...nums);
  const idx = nums.indexOf(big);
  nums.splice(idx, 1);
  const secondBig = Math.max(...nums);

  return big >= secondBig * 2 ? idx : -1;
}
