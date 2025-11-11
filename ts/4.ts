function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  return findMiddleElements(arr);
}

function findMiddleElements(arr) {
  const mid = arr.length / 2;

  if (arr.length % 2 === 1) {
    return arr[Math.floor(mid)];
  } else {
    return (arr[mid - 1] + arr[mid]) / 2;
  }
}
