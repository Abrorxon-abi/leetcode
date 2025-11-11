function lengthOfLongestSubstring(s: string): number {
  const seen = new Set();
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < s.length) {
    if (!seen.has(s[right])) {
      seen.add(s[right]);
      right++;
      max = Math.max(max, right - left);
    } else {
      seen.delete(s[left]);
      left++;
    }
  }

  return max;
}
