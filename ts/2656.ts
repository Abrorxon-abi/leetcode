function maximizeSum(nums: number[], k: number): number {
  let num = Math.max(...nums);
  let acc = num;

  for (let i = 1; i < k; i++) {
    acc += ++num;
  }

  return acc;
}
