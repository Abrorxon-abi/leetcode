// Problem Statement: https://leetcode.com/problems/intersection-of-two-arrays/description/

function intersection(nums1: number[], nums2: number[]): number[] {
  let nums_1 = new Set(nums1);
  let nums_2 = new Set(nums2);

  let res = [...nums_1].filter((n) => {
    return nums_2.has(n);
  });
  return res;
}
