function uncommonFromSentences(s1: string, s2: string): string[] {
  const arr = [...s1.split(" "), ...s2.split(" ")];
  const map = new Map();
  const ans = [];

  for (const ch of arr) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  for (const [key, val] of map.entries()) {
    if (val === 1) ans.push(key);
  }

  return ans;
}
