/**
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function (s) {
  const n = s.length;
  let count = 0;
  const dp = Array.from(Array(n), () => Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    count += 1;
  }

  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      count += 1;
    }
  }

  for (let length = 3; length <= n; length++) {
    for (let i = 0; i < n - length + 1; i++) {
      const j = i + length - 1;
      if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true;
        count += 1;
      }
    }
  }

  return count;
};
