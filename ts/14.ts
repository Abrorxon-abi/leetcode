function longestCommonPrefix(strs: string[]): string {
  let ans = strs[0];

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < ans.length; j++) {
      if (ans[j] !== strs[i][j]) {
        ans = ans.slice(0, j);
      }
    }
  }

  return ans;
}
