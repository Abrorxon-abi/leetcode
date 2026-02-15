function findNumbers(nums: number[]): number {
  let counter = 0;

  for (let n of nums) {
    if (String(n).length % 2 === 0) counter++;
  }

  return counter;
}
