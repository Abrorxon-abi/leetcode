function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const arr1: number[] = [];
  const arr2: number[] = [];

  for (const value of set1) {
    if (!set2.has(value)) arr1.push(value);
  }

  for (const value of set2) {
    if (!set1.has(value)) arr2.push(value);
  }

  return [arr1, arr2];
}
