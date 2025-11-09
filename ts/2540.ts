function getCommon(nums1: number[], nums2: number[]): number {
  const set2 = new Set(nums2);

  const intersection = nums1.filter((n) => set2.has(n));

  return intersection.length ? intersection[0] : -1;
}
