// Problem Statement: https://leetcode.com/problems/decompress-run-length-encoded-list/description/

function decompressRLElist(nums: number[]): number[] {
  const ans = [];
  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      ans.push(nums[i + 1]);
    }
  }

  return ans;
}
