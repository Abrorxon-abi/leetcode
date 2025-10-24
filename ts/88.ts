// Problem Statement: https://leetcode.com/problems/merge-sorted-array/description/

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  while (nums1.length && nums1[0] === 0 && nums2[0] !== 0) {
    nums1.shift();
  }
  nums1.splice(m, nums1.length - 1, ...nums2.slice(0, n));
  nums1.sort((a, b) => a - b);
}
