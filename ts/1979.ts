function findGCD(nums: number[]): number {
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  function gcd(max: number, min: number) {
    if (min === 0) {
      return max;
    }
    return gcd(min, max % min);
  }

  return gcd(max, min);
}
