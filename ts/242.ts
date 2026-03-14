function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const m1 = new Map();
  const m2 = new Map();

  for (let i = 0; i < s.length; i++) {
    m1.set(s[i], (m1.get(s[i]) ?? 0) + 1);
    m2.set(t[i], (m2.get(t[i]) ?? 0) + 1);
  }

  for (const [key, val] of m1) {
    if (!m2.has(key) || m2.get(key) !== val) {
      return false;
    }
  }

  return true;
}
