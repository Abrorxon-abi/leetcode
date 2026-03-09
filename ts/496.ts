function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const ans: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        const len = ans.length;
        for (let k = j + 1; k < nums2.length; k++) {
          if (nums2[k] > nums2[j]) {
            ans.push(nums2[k]);
            break;
          }
        }
        if (len === ans.length) {
          ans.push(-1);
        }
      }
    }
  }

  return ans;
}
