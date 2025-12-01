function balancedStringSplit(s: string): number {
  let balance = 0;
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") balance++;
    if (s[i] === "R") balance--;
    if (balance === 0) ans++;
  }

  return ans;
}
