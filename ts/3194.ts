function minimumAverage(nums: number[]): number {
  const avgs = [];

  nums.sort((a, b) => a - b);

  while (nums.length != 0) {
    avgs.push((nums.pop()! + nums.shift()!) / 2);
  }

  return Math.min(...avgs);
}
