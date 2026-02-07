function minimumDeletions(s: string): number {
  let aCount = 0;

  for (let ch of s) {
    if (ch === "a") aCount++;
  }

  if (aCount === 0) return 0;

  let bCount = 0;
  let ans = aCount;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      aCount--;
    } else {
      bCount++;
    }

    ans = Math.min(ans, bCount + aCount);
  }

  return ans;
}
