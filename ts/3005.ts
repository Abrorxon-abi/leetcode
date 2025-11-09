function maxFrequencyElements(nums: number[]): number {
  const counts = nums.reduce<Record<number, number>>((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  const max = Math.max(...Object.values(counts));

  const acc = Object.values(counts).reduce((acc, num) => {
    if (num === max) acc += num;
    return acc;
  }, 0);

  return acc;
}
