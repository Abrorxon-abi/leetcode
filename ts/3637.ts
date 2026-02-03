function isTrionic(nums: number[]): boolean {
  if (nums.length < 4) return false;

  function isDecreasing(start: number, end: number) {
    for (let i = start; i < end; i++) {
      if (nums[i] <= nums[i + 1]) {
        return false;
      }
    }
    return true;
  }

  function isIncreasing(start: number, end: number) {
    for (let i = start; i < end; i++) {
      if (nums[i] >= nums[i + 1]) {
        return false;
      }
    }
    return true;
  }

  let n = nums.length;

  for (let p = 1; p < n - 2; p++) {
    if (isIncreasing(0, p)) {
      for (let q = p + 1; q < n - 1; q++) {
        if (isDecreasing(p, q) && isIncreasing(q, n - 1)) {
          return true;
        }
      }
    }
  }

  return false;
}
