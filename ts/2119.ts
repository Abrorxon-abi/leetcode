function isSameAfterReversals(num: number): boolean {
  if (num === 0) return true;
  if (num.toString().endsWith("0")) return false;
  return true;
}
