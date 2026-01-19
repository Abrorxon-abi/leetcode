function maxProductDifference(nums: number[]): number {
  const twoBiggest = [...nums].sort((a, b) => b - a).slice(0, 2);
  const twoSmallest = [...nums].sort((a, b) => a - b).slice(0, 2);

  return twoBiggest[0] * twoBiggest[1] - twoSmallest[0] * twoSmallest[1];
}
