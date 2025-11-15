function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  let counter = 0;
  const ans = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) counter++;
  }

  ans.push(counter);
  counter = 0;

  for (let i = 0; i < nums2.length; i++) {
    if (nums1.includes(nums2[i])) counter++;
  }

  ans.push(counter);
  return ans;
}
