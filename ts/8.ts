function myAtoi(s: string): number {
  const MIN = -(2 ** 31);
  const MAX = 2 ** 31 - 1;

  const ans = parseInt(s) || 0;

  if (ans > MAX) return MAX;
  if (ans < MIN) return MIN;
  return ans;
}
