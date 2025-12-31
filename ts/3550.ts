function smallestIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (i === sumDigitsConcise(nums[i])) return i;
  }

  return -1;
}

function sumDigitsConcise(num: number) {
  return [...String(num)].reduce((acc, curr) => acc + Number(curr), 0);
}
