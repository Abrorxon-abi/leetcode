function maximumCount(nums: number[]): number {
  let pos = 0;
  let neg = 0;

  for (const n of nums) {
    if (n > 0) {
      pos++;
    } else if (n < 0) {
      neg++;
    }
  }

  return pos > neg ? pos : neg;
}
