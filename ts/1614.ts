function maxDepth(s: string): number {
  let ans = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") ans++;
    else if (s[i] === ")") ans--;
    max = Math.max(max, ans);
  }

  return max;
}
