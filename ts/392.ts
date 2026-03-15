function isSubsequence(s: string, t: string): boolean {
  let lastIdx = -1;

  for (let i = 0; i < s.length; i++) {
    lastIdx = t.indexOf(s[i], ++lastIdx);
    if (lastIdx === -1) return false;
  }

  return true;
}
