function minSteps(s: string, t: string): number {
  let acc = 0;
  const m1 = new Map<string, number>();
  const m2 = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    m1.set(s[i], (m1.get(s[i]) ?? 0) + 1);
    m2.set(t[i], (m2.get(t[i]) ?? 0) + 1);
  }

  for (let [key, val] of m1.entries()) {
    acc += Math.max(0, val - (m2.get(key) ?? 0));
  }

  return acc;
}
