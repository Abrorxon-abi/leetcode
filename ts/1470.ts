function shuffle(nums: number[], n: number): number[] {
  const sliced = nums.splice(n);
  const shufled = [];
  for (let i = 0; i < nums.length; i++) {
    shufled.push(nums[i]);
    shufled.push(sliced[i]);
  }
  return shufled;
}
