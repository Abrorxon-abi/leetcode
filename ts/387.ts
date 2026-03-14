function firstUniqChar(s: string): number {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);
  }

  for (const [key, val] of map.entries()) {
    if (val === 1) return s.indexOf(key);
  }

  return -1;
}
