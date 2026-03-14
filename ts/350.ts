function intersect(nums1: number[], nums2: number[]): number[] {
  const ans = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      const idx = nums2.indexOf(nums1[i]);
      nums2.splice(idx, 1);
      ans.push(nums1[i]);
    }
  }

  return ans;
}
