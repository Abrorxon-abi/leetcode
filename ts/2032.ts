function twoOutOfThree(
  nums1: number[],
  nums2: number[],
  nums3: number[],
): number[] {
  const set = new Set<number>();

  for (let n of [...nums1, ...nums2, ...nums3]) {
    if (
      (nums1.includes(n) && nums2.includes(n)) ||
      (nums1.includes(n) && nums3.includes(n)) ||
      (nums2.includes(n) && nums3.includes(n))
    ) {
      set.add(n);
    }
  }

  return [...set];
}
