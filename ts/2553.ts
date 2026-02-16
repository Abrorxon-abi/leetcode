function separateDigits(nums: number[]): number[] {
  return nums
    .join("")
    .split("")
    .map((n) => Number(n));
}
