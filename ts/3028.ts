function returnToBoundaryCount(nums: number[]): number {
  let acc = 0;
  let counter = 0;

  for (const n of nums) {
    acc += n;
    if (acc === 0) counter++;
  }

  return counter;
}
