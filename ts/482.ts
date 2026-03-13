function licenseKeyFormatting(s: string, k: number): string {
  s = s.replace(/-/g, "").toUpperCase();
  const firstGroupLength = s.length % k || k;
  const ans = [];
  let w = "";
  let n = 0;

  ans.push(s.slice(0, firstGroupLength));

  for (let i = firstGroupLength; i < s.length; i++) {
    w += s[i];
    n++;
    if (n === k) {
      ans.push(w);
      w = "";
      n = 0;
    }
  }

  return ans.join("-");
}
