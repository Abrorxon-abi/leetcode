/**
 * @param {number[]} nums
 * @return {number[]}
 */

var largestDivisibleSubset = function (nums) {
  if (nums.length === 0) {
    return [];
  }

  nums.sort((a, b) => a - b);
  const n = nums.length;

  const dp = new Array(n).fill(1);
  const prev = new Array(n).fill(-1);

  let maxLen = 1;
  let endIndex = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }

    if (dp[i] > maxLen) {
      maxLen = dp[i];
      endIndex = i;
    }
  }

  const result = [];
  while (endIndex !== -1) {
    result.push(nums[endIndex]);
    endIndex = prev[endIndex];
  }

  return result.reverse();
};
